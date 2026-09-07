package com.example.game.renderer

import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.DrawScope
import com.example.game.math.Camera3D
import com.example.game.math.Point2D
import com.example.game.math.Vector3
import com.example.game.model.GameConstants
import kotlin.math.floor
import kotlin.math.max

/**
 * Renders the endless 3-lane running track in 3D perspective.
 */
class TrackRenderer {

  // Background Sky Gradients
  private val skyColorTop = Color(0xFF0F172A)
  private val skyColorHorizon = Color(0xFF1E293B)

  // Track Surface Colors (Alternating segments for forward motion feeling)
  private val trackColorEven = Color(0xFF1E293B)
  private val trackColorOdd = Color(0xFF2B394E)

  // Lane Dividers
  private val dividerColor = Color(0xFFF1F5F9)

  // Curbs (Classic alternating racing curbs)
  private val curbColorA = Color(0xFFEF4444) // Bright Red
  private val curbColorB = Color(0xFFF8FAFC) // White

  // Reusable path to minimize allocations
  private val polyPath = Path()

  fun render(
    drawScope: DrawScope,
    camera: Camera3D,
    playerZ: Float
  ) {
    val width = drawScope.size.width
    val height = drawScope.size.height
    val horizonY = height * 0.45f

    // 1. Draw Sky and distant background
    drawScope.drawRect(
      brush = Brush.verticalGradient(
        colors = listOf(skyColorTop, skyColorHorizon),
        startY = 0f,
        endY = horizonY
      ),
      topLeft = Offset(0f, 0f),
      size = androidx.compose.ui.geometry.Size(width, horizonY)
    )

    // Horizon line
    drawScope.drawLine(
      color = Color(0xFF475569),
      start = Offset(0f, horizonY),
      end = Offset(width, horizonY),
      strokeWidth = 1.5f
    )

    // 2. Draw ground outside the track
    drawScope.drawRect(
      color = Color(0xFF0B1120),
      topLeft = Offset(0f, horizonY),
      size = androidx.compose.ui.geometry.Size(width, height - horizonY)
    )

    // 3. Render Track Segments in 3D perspective from horizon down to camera
    val segmentLength = GameConstants.SEGMENT_LENGTH
    val firstSeg = floor((camera.position.z + 0.2f) / segmentLength).toInt()
    val totalSegments = (GameConstants.RENDER_DISTANCE / segmentLength).toInt()

    // Draw from farthest to nearest (painter's algorithm)
    for (i in (firstSeg + totalSegments) downTo firstSeg) {
      val z0 = max(camera.position.z + 0.3f, i * segmentLength)
      val z1 = (i + 1) * segmentLength
      if (z1 <= z0) continue

      val isEven = (i % 2 == 0)
      val trackColor = if (isEven) trackColorEven else trackColorOdd
      val curbColor = if (isEven) curbColorA else curbColorB

      val halfTrack = GameConstants.TRACK_HALF_WIDTH
      val curbW = GameConstants.CURB_WIDTH

      // Main 3-Lane Track Surface
      drawQuad3D(
        drawScope = drawScope,
        camera = camera,
        width = width,
        height = height,
        x1 = -halfTrack, x2 = halfTrack,
        z0 = z0, z1 = z1,
        y0 = 0f, y1 = 0f,
        color = trackColor
      )

      // Left Curb
      drawQuad3D(
        drawScope = drawScope,
        camera = camera,
        width = width,
        height = height,
        x1 = -halfTrack - curbW, x2 = -halfTrack,
        z0 = z0, z1 = z1,
        y0 = 0.04f, y1 = 0.04f,
        color = curbColor
      )

      // Right Curb
      drawQuad3D(
        drawScope = drawScope,
        camera = camera,
        width = width,
        height = height,
        x1 = halfTrack, x2 = halfTrack + curbW,
        z0 = z0, z1 = z1,
        y0 = 0.04f, y1 = 0.04f,
        color = curbColor
      )

      // Lane Divider Dashed Lines (between Left/Center and Center/Right lanes)
      if (isEven) {
        val divWidth = 0.04f

        // Divider between Lane -1 and Lane 0 at X = -0.6
        drawQuad3D(
          drawScope = drawScope,
          camera = camera,
          width = width,
          height = height,
          x1 = -0.6f - divWidth, x2 = -0.6f + divWidth,
          z0 = z0, z1 = z1,
          y0 = 0.005f, y1 = 0.005f,
          color = dividerColor
        )

        // Divider between Lane 0 and Lane +1 at X = +0.6
        drawQuad3D(
          drawScope = drawScope,
          camera = camera,
          width = width,
          height = height,
          x1 = 0.6f - divWidth, x2 = 0.6f + divWidth,
          z0 = z0, z1 = z1,
          y0 = 0.005f, y1 = 0.005f,
          color = dividerColor
        )
      }
    }
  }

  private fun drawQuad3D(
    drawScope: DrawScope,
    camera: Camera3D,
    width: Float,
    height: Float,
    x1: Float, x2: Float,
    z0: Float, z1: Float,
    y0: Float, y1: Float,
    color: Color
  ) {
    val p00 = camera.project(Vector3(x1, y0, z0), width, height) ?: return
    val p10 = camera.project(Vector3(x2, y0, z0), width, height) ?: return
    val p11 = camera.project(Vector3(x2, y1, z1), width, height) ?: return
    val p01 = camera.project(Vector3(x1, y1, z1), width, height) ?: return

    polyPath.reset()
    polyPath.moveTo(p00.x, p00.y)
    polyPath.lineTo(p10.x, p10.y)
    polyPath.lineTo(p11.x, p11.y)
    polyPath.lineTo(p01.x, p01.y)
    polyPath.close()

    drawScope.drawPath(polyPath, color)
  }
}
