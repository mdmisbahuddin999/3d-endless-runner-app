package com.example.game.ui

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ChevronLeft
import androidx.compose.material.icons.filled.ChevronRight
import androidx.compose.material.icons.filled.Pause
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.runtime.withFrameNanos
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.example.game.model.GameConstants

/**
 * Main game screen featuring:
 * - 3D Endless Runner Canvas with 3-lane track and 3D player placeholder
 * - Touch & swipe input handling (drag left/right or tap left/right)
 * - Lightweight HUD showing distance and active lane
 * - Pause and restart controls
 */
@Composable
fun GameScreen(
  viewModel: GameViewModel,
  modifier: Modifier = Modifier
) {
  val gameState by viewModel.gameState.collectAsStateWithLifecycle()

  // Frame tick trigger for Canvas re-drawing
  var frameTick by remember { mutableLongStateOf(0L) }

  // Game Loop using withFrameNanos (smooth 60/120 FPS display sync)
  LaunchedEffect(gameState.isRunning) {
    if (gameState.isRunning) {
      var lastFrameTimeNanos = 0L
      while (true) {
        withFrameNanos { timeNanos ->
          if (lastFrameTimeNanos != 0L) {
            val dtSec = (timeNanos - lastFrameTimeNanos) / 1_000_000_000f
            viewModel.update(dtSec)
          }
          lastFrameTimeNanos = timeNanos
          frameTick = timeNanos
        }
      }
    }
  }

  // Swipe gesture accumulator
  var dragAccumulatorX by remember { mutableFloatStateOf(0f) }

  Box(
    modifier = modifier
      .fillMaxSize()
      .background(Color(0xFF0B1120))
      // Touch & Swipe gesture handling for full screen
      .pointerInput(gameState.isRunning) {
        if (!gameState.isRunning) return@pointerInput
        detectDragGestures(
          onDragStart = { dragAccumulatorX = 0f },
          onDragEnd = { dragAccumulatorX = 0f },
          onDragCancel = { dragAccumulatorX = 0f },
          onDrag = { change, dragAmount ->
            change.consume()
            dragAccumulatorX += dragAmount.x
            val threshold = 35f // swipe sensitivity in px
            if (dragAccumulatorX > threshold) {
              viewModel.onMoveRight()
              dragAccumulatorX = 0f
            } else if (dragAccumulatorX < -threshold) {
              viewModel.onMoveLeft()
              dragAccumulatorX = 0f
            }
          }
        )
      }
      .pointerInput(gameState.isRunning) {
        if (!gameState.isRunning) return@pointerInput
        detectTapGestures { offset ->
          val screenWidth = size.width
          if (offset.x < screenWidth * 0.42f) {
            viewModel.onMoveLeft()
          } else if (offset.x > screenWidth * 0.58f) {
            viewModel.onMoveRight()
          }
        }
      }
  ) {
    // 1. Primary 3D Rendering Canvas
    Canvas(
      modifier = Modifier
        .fillMaxSize()
        .testTag("game_canvas")
    ) {
      // Access frameTick to trigger recomposition per frame
      @Suppress("UNUSED_VARIABLE")
      val tick = frameTick

      // Draw 3-lane endless track
      viewModel.trackRenderer.render(
        drawScope = this,
        camera = viewModel.camera,
        playerZ = viewModel.player.position.z
      )

      // Draw 3D player character placeholder
      viewModel.playerRenderer.render(
        drawScope = this,
        camera = viewModel.camera,
        player = viewModel.player
      )
    }

    // 2. Top HUD Bar
    TopHudBar(
      distanceMeters = gameState.distanceMeters,
      currentLane = gameState.currentLane,
      isRunning = gameState.isRunning,
      onTogglePause = { viewModel.togglePlayPause() },
      onReset = { viewModel.resetGame() },
      modifier = Modifier
        .align(Alignment.TopCenter)
        .statusBarsPadding()
        .padding(horizontal = 16.dp, vertical = 8.dp)
    )

    // 3. Bottom Lane Controls & Indicator
    BottomLaneControls(
      currentLane = gameState.currentLane,
      onMoveLeft = { viewModel.onMoveLeft() },
      onMoveRight = { viewModel.onMoveRight() },
      modifier = Modifier
        .align(Alignment.BottomCenter)
        .navigationBarsPadding()
        .padding(horizontal = 24.dp, vertical = 16.dp)
    )

    // 4. Paused Overlay
    if (!gameState.isRunning) {
      Box(
        modifier = Modifier
          .fillMaxSize()
          .background(Color(0x99000000)),
        contentAlignment = Alignment.Center
      ) {
        Card(
          shape = RoundedCornerShape(20.dp),
          colors = CardDefaults.cardColors(containerColor = Color(0xFF1E293B)),
          elevation = CardDefaults.cardElevation(8.dp),
          modifier = Modifier.padding(32.dp)
        ) {
          Column(
            modifier = Modifier.padding(28.dp),
            horizontalAlignment = Alignment.CenterHorizontally
          ) {
            Text(
              text = "GAME PAUSED",
              style = MaterialTheme.typography.headlineSmall,
              fontWeight = FontWeight.Bold,
              color = Color.White
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
              text = "Distance: ${gameState.distanceMeters} m",
              style = MaterialTheme.typography.bodyLarge,
              color = Color(0xFF94A3B8)
            )
            Spacer(modifier = Modifier.height(20.dp))
            Button(
              onClick = { viewModel.togglePlayPause() },
              colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF0284C7)),
              shape = RoundedCornerShape(12.dp),
              modifier = Modifier
                .fillMaxWidth()
                .testTag("resume_button")
            ) {
              Icon(Icons.Filled.PlayArrow, contentDescription = "Resume")
              Spacer(modifier = Modifier.width(8.dp))
              Text("Resume", fontWeight = FontWeight.SemiBold)
            }
          }
        }
      }
    }
  }
}

/**
 * Top HUD displaying distance, active lane name, and pause button.
 */
@Composable
private fun TopHudBar(
  distanceMeters: Int,
  currentLane: Int,
  isRunning: Boolean,
  onTogglePause: () -> Unit,
  onReset: () -> Unit,
  modifier: Modifier = Modifier
) {
  Row(
    modifier = modifier.fillMaxWidth(),
    horizontalArrangement = Arrangement.SpaceBetween,
    verticalAlignment = Alignment.CenterVertically
  ) {
    // Distance Metric
    Surface(
      shape = RoundedCornerShape(14.dp),
      color = Color(0xCC0F172A),
      shadowElevation = 4.dp
    ) {
      Row(
        modifier = Modifier
          .padding(horizontal = 14.dp, vertical = 8.dp)
          .testTag("distance_display"),
        verticalAlignment = Alignment.CenterVertically
      ) {
        Text(
          text = "DISTANCE: ",
          style = MaterialTheme.typography.labelMedium,
          fontWeight = FontWeight.Bold,
          color = Color(0xFF94A3B8)
        )
        Text(
          text = "$distanceMeters m",
          style = MaterialTheme.typography.titleMedium,
          fontWeight = FontWeight.Black,
          color = Color(0xFF38BDF8)
        )
      }
    }

    // Action Buttons (Restart & Pause)
    Row(verticalAlignment = Alignment.CenterVertically) {
      IconButton(
        onClick = onReset,
        modifier = Modifier
          .padding(end = 6.dp)
          .background(Color(0xCC0F172A), CircleShape)
          .size(44.dp)
          .testTag("reset_button")
      ) {
        Icon(
          imageVector = Icons.Filled.Refresh,
          contentDescription = "Restart run",
          tint = Color(0xFFE2E8F0)
        )
      }

      IconButton(
        onClick = onTogglePause,
        modifier = Modifier
          .background(Color(0xCC0F172A), CircleShape)
          .size(44.dp)
          .testTag("pause_button")
      ) {
        Icon(
          imageVector = if (isRunning) Icons.Filled.Pause else Icons.Filled.PlayArrow,
          contentDescription = if (isRunning) "Pause game" else "Resume game",
          tint = Color(0xFF38BDF8)
        )
      }
    }
  }
}

/**
 * Accessible bottom steering controls and 3-lane visual indicator.
 */
@Composable
private fun BottomLaneControls(
  currentLane: Int,
  onMoveLeft: () -> Unit,
  onMoveRight: () -> Unit,
  modifier: Modifier = Modifier
) {
  Row(
    modifier = modifier.fillMaxWidth(),
    horizontalArrangement = Arrangement.SpaceBetween,
    verticalAlignment = Alignment.CenterVertically
  ) {
    // Left Move Button
    IconButton(
      onClick = onMoveLeft,
      enabled = currentLane > GameConstants.LANE_LEFT,
      modifier = Modifier
        .size(56.dp)
        .background(
          color = if (currentLane > GameConstants.LANE_LEFT) Color(0xCC1E293B) else Color(0x441E293B),
          shape = CircleShape
        )
        .testTag("move_left_button")
    ) {
      Icon(
        imageVector = Icons.Filled.ChevronLeft,
        contentDescription = "Move left lane",
        tint = if (currentLane > GameConstants.LANE_LEFT) Color(0xFF38BDF8) else Color(0xFF64748B),
        modifier = Modifier.size(36.dp)
      )
    }

    // 3-Lane Visual Indicator Pills
    Surface(
      shape = RoundedCornerShape(16.dp),
      color = Color(0xCC0F172A),
      shadowElevation = 4.dp
    ) {
      Row(
        modifier = Modifier
          .padding(horizontal = 16.dp, vertical = 10.dp)
          .testTag("lane_indicator"),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
        verticalAlignment = Alignment.CenterVertically
      ) {
        LanePill(label = "L", isSelected = currentLane == GameConstants.LANE_LEFT)
        LanePill(label = "C", isSelected = currentLane == GameConstants.LANE_CENTER)
        LanePill(label = "R", isSelected = currentLane == GameConstants.LANE_RIGHT)
      }
    }

    // Right Move Button
    IconButton(
      onClick = onMoveRight,
      enabled = currentLane < GameConstants.LANE_RIGHT,
      modifier = Modifier
        .size(56.dp)
        .background(
          color = if (currentLane < GameConstants.LANE_RIGHT) Color(0xCC1E293B) else Color(0x441E293B),
          shape = CircleShape
        )
        .testTag("move_right_button")
    ) {
      Icon(
        imageVector = Icons.Filled.ChevronRight,
        contentDescription = "Move right lane",
        tint = if (currentLane < GameConstants.LANE_RIGHT) Color(0xFF38BDF8) else Color(0xFF64748B),
        modifier = Modifier.size(36.dp)
      )
    }
  }
}

@Composable
private fun LanePill(
  label: String,
  isSelected: Boolean
) {
  Box(
    modifier = Modifier
      .size(width = 30.dp, height = 22.dp)
      .background(
        color = if (isSelected) Color(0xFF0284C7) else Color(0xFF334155),
        shape = RoundedCornerShape(6.dp)
      ),
    contentAlignment = Alignment.Center
  ) {
    Text(
      text = label,
      fontSize = 11.sp,
      fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal,
      color = if (isSelected) Color.White else Color(0xFF94A3B8)
    )
  }
}
