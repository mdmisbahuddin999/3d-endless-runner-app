package com.example.game.renderer

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.DrawScope
import com.example.game.math.Camera3D
import com.example.game.math.Point2D
import com.example.game.math.Vector3
import com.example.game.model.Player
import kotlin.math.cos
import kotlin.math.sin

/**
 * Renders the 3D player character placeholder with dynamic running animation,
 * banking tilt, and contact shadow.
 */
class PlayerRenderer {

  // Primary colors for the 3D placeholder runner
  private val torsoColor = Color(0xFF0284C7)    // Energetic Runner Cyan
  private val headColor = Color(0xFFE2E8F0)     // Off-white head
  private val visorColor = Color(0xFF38BDF8)    // Cyan visor
  private val limbColor = Color(0xFF1E293B)     // Dark Slate limbs
  private val shoeColor = Color(0xFFF97316)     // Vibrant orange shoes
  private val shadowColor = Color(0x55000000)   // Ground contact shadow

  private val polyPath = Path()

  fun render(
    drawScope: DrawScope,
    camera: Camera3D,
    player: Player
  ) {
    val screenW = drawScope.size.width
    val screenH = drawScope.size.height

    val px = player.position.x
    val py = player.position.y
    val pz = player.position.z
    val tilt = player.tilt
    val stride = player.stridePhase

    // 1. Draw Contact Shadow on Track Floor (Y = 0.008f)
    drawContactShadow(drawScope, camera, screenW, screenH, px, pz)

    // Stride animation offsets for legs & arms
    val legSwing = sin(stride) * 0.22f
    val armSwing = -legSwing * 0.8f

    // 2. Left Leg & Shoe
    drawBox3D(
      drawScope = drawScope,
      camera = camera,
      screenW = screenW,
      screenH = screenH,
      center = Vector3(px - 0.15f, py + 0.22f, pz + legSwing),
      size = Vector3(0.13f, 0.40f, 0.16f),
      baseColor = limbColor,
      tilt = tilt
    )
    drawBox3D(
      drawScope = drawScope,
      camera = camera,
      screenW = screenW,
      screenH = screenH,
      center = Vector3(px - 0.15f, py + 0.04f, pz + legSwing + 0.03f),
      size = Vector3(0.14f, 0.08f, 0.22f),
      baseColor = shoeColor,
      tilt = tilt
    )

    // 3. Right Leg & Shoe
    drawBox3D(
      drawScope = drawScope,
      camera = camera,
      screenW = screenW,
      screenH = screenH,
      center = Vector3(px + 0.15f, py + 0.22f, pz - legSwing),
      size = Vector3(0.13f, 0.40f, 0.16f),
      baseColor = limbColor,
      tilt = tilt
    )
    drawBox3D(
      drawScope = drawScope,
      camera = camera,
      screenW = screenW,
      screenH = screenH,
      center = Vector3(px + 0.15f, py + 0.04f, pz - legSwing + 0.03f),
      size = Vector3(0.14f, 0.08f, 0.22f),
      baseColor = shoeColor,
      tilt = tilt
    )

    // 4. Torso
    drawBox3D(
      drawScope = drawScope,
      camera = camera,
      screenW = screenW,
      screenH = screenH,
      center = Vector3(px, py + 0.65f, pz),
      size = Vector3(0.50f, 0.52f, 0.34f),
      baseColor = torsoColor,
      tilt = tilt
    )

    // 5. Left Arm
    drawBox3D(
      drawScope = drawScope,
      camera = camera,
      screenW = screenW,
      screenH = screenH,
      center = Vector3(px - 0.32f, py + 0.62f, pz + armSwing),
      size = Vector3(0.12f, 0.42f, 0.14f),
      baseColor = limbColor,
      tilt = tilt
    )

    // 6. Right Arm
    drawBox3D(
      drawScope = drawScope,
      camera = camera,
      screenW = screenW,
      screenH = screenH,
      center = Vector3(px + 0.32f, py + 0.62f, pz - armSwing),
      size = Vector3(0.12f, 0.42f, 0.14f),
      baseColor = limbColor,
      tilt = tilt
    )

    // 7. Head
    drawBox3D(
      drawScope = drawScope,
      camera = camera,
      screenW = screenW,
      screenH = screenH,
      center = Vector3(px, py + 1.08f, pz),
      size = Vector3(0.32f, 0.32f, 0.30f),
      baseColor = headColor,
      tilt = tilt
    )

    // 8. Visor / Face Accent (facing forward +Z)
    drawBox3D(
      drawScope = drawScope,
      camera = camera,
      screenW = screenW,
      screenH = screenH,
      center = Vector3(px, py + 1.08f, pz + 0.12f),
      size = Vector3(0.28f, 0.12f, 0.10f),
      baseColor = visorColor,
      tilt = tilt
    )
  }

  /**
   * Draws a projected 3D box with directional lighting and banking tilt.
   */
  private fun drawBox3D(
    drawScope: DrawScope,
    camera: Camera3D,
    screenW: Float,
    screenH: Float,
    center: Vector3,
    size: Vector3,
    baseColor: Color,
    tilt: Float
  ) {
    val hw = size.x * 0.5f
    val hh = size.y * 0.5f
    val hd = size.z * 0.5f

    // 8 local vertices
    val localVerts = arrayOf(
      Vector3(-hw, -hh, -hd), // 0: back bottom-left
      Vector3(hw, -hh, -hd),  // 1: back bottom-right
      Vector3(hw, hh, -hd),   // 2: back top-right
      Vector3(-hw, hh, -hd),  // 3: back top-left
      Vector3(-hw, -hh, hd),  // 4: front bottom-left
      Vector3(hw, -hh, hd),   // 5: front bottom-right
      Vector3(hw, hh, hd),    // 6: front top-right
      Vector3(-hw, hh, hd)    // 7: front top-left
    )

    // Apply tilt around Z and translate to world space
    val cosT = cos(tilt)
    val sinT = sin(tilt)

    val worldVerts = Array(8) { i ->
      val lv = localVerts[i]
      val rx = lv.x * cosT - lv.y * sinT
      val ry = lv.x * sinT + lv.y * cosT
      Vector3(center.x + rx, center.y + ry, center.z + lv.z)
    }

    val projected = Array<Point2D?>(8) { i ->
      camera.project(worldVerts[i], screenW, screenH)
    }

    // Shading variations
    val topColor = baseColor.multiply(1.25f)
    val backColor = baseColor
    val leftColor = baseColor.multiply(0.82f)
    val rightColor = baseColor.multiply(0.88f)
    val frontColor = baseColor.multiply(0.95f)

    // Faces:
    // Front face (facing +Z, farthest from camera)
    drawQuadFace(drawScope, projected[4], projected[5], projected[6], projected[7], frontColor)

    // Left or Right face depending on viewpoint
    val dx = center.x - camera.position.x
    if (dx < 0f) {
      // Player is to the left of camera -> right face is visible
      drawQuadFace(drawScope, projected[1], projected[5], projected[6], projected[2], rightColor)
    } else {
      // Player is to the right of camera -> left face is visible
      drawQuadFace(drawScope, projected[4], projected[0], projected[3], projected[7], leftColor)
    }

    // Back face (facing -Z, facing directly at camera)
    drawQuadFace(drawScope, projected[0], projected[1], projected[2], projected[3], backColor)

    // Top face (facing +Y, camera is above player)
    drawQuadFace(drawScope, projected[3], projected[2], projected[6], projected[7], topColor)
  }

  private fun drawQuadFace(
    drawScope: DrawScope,
    p0: Point2D?,
    p1: Point2D?,
    p2: Point2D?,
    p3: Point2D?,
    color: Color
  ) {
    if (p0 == null || p1 == null || p2 == null || p3 == null) return

    polyPath.reset()
    polyPath.moveTo(p0.x, p0.y)
    polyPath.lineTo(p1.x, p1.y)
    polyPath.lineTo(p2.x, p2.y)
    polyPath.lineTo(p3.x, p3.y)
    polyPath.close()

    drawScope.drawPath(polyPath, color)
  }

  private fun drawContactShadow(
    drawScope: DrawScope,
    camera: Camera3D,
    screenW: Float,
    screenH: Float,
    px: Float,
    pz: Float
  ) {
    val rw = 0.34f
    val rd = 0.30f
    val sy = 0.008f

    val p0 = camera.project(Vector3(px - rw, sy, pz), screenW, screenH) ?: return
    val p1 = camera.project(Vector3(px, sy, pz - rd), screenW, screenH) ?: return
    val p2 = camera.project(Vector3(px + rw, sy, pz), screenW, screenH) ?: return
    val p3 = camera.project(Vector3(px, sy, pz + rd), screenW, screenH) ?: return

    polyPath.reset()
    polyPath.moveTo(p0.x, p0.y)
    polyPath.lineTo(p1.x, p1.y)
    polyPath.lineTo(p2.x, p2.y)
    polyPath.lineTo(p3.x, p3.y)
    polyPath.close()

    drawScope.drawPath(polyPath, shadowColor)
  }

  private fun Color.multiply(factor: Float): Color {
    return Color(
      red = (red * factor).coerceIn(0f, 1f),
      green = (green * factor).coerceIn(0f, 1f),
      blue = (blue * factor).coerceIn(0f, 1f),
      alpha = alpha
    )
  }
}
