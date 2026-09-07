package com.example.game.ui

import androidx.lifecycle.ViewModel
import com.example.game.math.Camera3D
import com.example.game.model.GameConstants
import com.example.game.model.GameState
import com.example.game.model.Player
import com.example.game.renderer.PlayerRenderer
import com.example.game.renderer.TrackRenderer
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

/**
 * Manages the game loop state, player movement, lane switching, and camera follow.
 */
class GameViewModel : ViewModel() {

  val player = Player()
  val camera = Camera3D()
  val trackRenderer = TrackRenderer()
  val playerRenderer = PlayerRenderer()

  private val _gameState = MutableStateFlow(
    GameState(
      distanceMeters = 0,
      currentLane = player.targetLane,
      isRunning = true,
      speed = GameConstants.RUN_SPEED
    )
  )
  val gameState: StateFlow<GameState> = _gameState.asStateFlow()

  /**
   * Called on each frame with elapsed time in seconds.
   */
  fun update(deltaTimeSec: Float) {
    if (!_gameState.value.isRunning) return

    val clampedDt = deltaTimeSec.coerceIn(0.001f, 0.1f)

    // Update player forward movement and lane lerp
    player.update(clampedDt, GameConstants.RUN_SPEED)

    // Camera smoothly follows player
    camera.follow(player.position)

    // Update UI state snapshot
    val distance = player.position.z.toInt()
    if (distance != _gameState.value.distanceMeters ||
      player.currentLane != _gameState.value.currentLane
    ) {
      _gameState.update {
        it.copy(
          distanceMeters = distance,
          currentLane = player.currentLane
        )
      }
    }
  }

  /**
   * Move player one lane to the left.
   */
  fun onMoveLeft() {
    player.moveLeft()
    _gameState.update { it.copy(currentLane = player.targetLane) }
  }

  /**
   * Move player one lane to the right.
   */
  fun onMoveRight() {
    player.moveRight()
    _gameState.update { it.copy(currentLane = player.targetLane) }
  }

  /**
   * Toggles pause / resume state.
   */
  fun togglePlayPause() {
    _gameState.update { it.copy(isRunning = !it.isRunning) }
  }

  /**
   * Resets the game to start over.
   */
  fun resetGame() {
    player.reset()
    camera.follow(player.position)
    _gameState.value = GameState(
      distanceMeters = 0,
      currentLane = GameConstants.LANE_CENTER,
      isRunning = true,
      speed = GameConstants.RUN_SPEED
    )
  }
}
