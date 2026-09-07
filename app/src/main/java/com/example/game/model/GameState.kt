package com.example.game.model

/**
 * Snapshot of the current game state for the UI layer.
 */
data class GameState(
  val distanceMeters: Int = 0,
  val currentLane: Int = GameConstants.LANE_CENTER,
  val isRunning: Boolean = true,
  val speed: Float = GameConstants.RUN_SPEED
)
