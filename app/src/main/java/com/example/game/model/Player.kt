package com.example.game.model

import com.example.game.math.Vector3
import kotlin.math.abs
import kotlin.math.exp
import kotlin.math.sin

/**
 * Represents the 3D player character placeholder state.
 */
data class Player(
  var position: Vector3 = Vector3(0f, 0f, 0f),
  var targetLane: Int = GameConstants.LANE_CENTER,
  var stridePhase: Float = 0f,
  var tilt: Float = 0f,
  var isMovingLane: Boolean = false
) {
  /**
   * Current lane based on rounded position or target.
   */
  val currentLane: Int
    get() = when {
      position.x < -0.6f -> GameConstants.LANE_LEFT
      position.x > 0.6f -> GameConstants.LANE_RIGHT
      else -> GameConstants.LANE_CENTER
    }

  /**
   * Advances player forward and smoothly interpolates lane transitions.
   */
  fun update(dt: Float, speed: Float) {
    // 1. Move forward
    val newZ = position.z + speed * dt
    stridePhase = newZ * 3.8f

    // 2. Smoothly move toward target lane
    val targetX = targetLane * GameConstants.LANE_WIDTH
    val diffX = targetX - position.x
    val lerpFactor = 1f - exp(-15f * dt)
    val newX = position.x + diffX * lerpFactor

    isMovingLane = abs(targetX - newX) > 0.05f

    // 3. Dynamic banking tilt when switching lanes
    tilt = (targetX - newX).coerceIn(-0.35f, 0.35f)

    // 4. Subtle vertical running bounce
    val bounce = abs(sin(stridePhase)) * 0.08f

    position = Vector3(newX, bounce, newZ)
  }

  /**
   * Attempts to move left one lane.
   */
  fun moveLeft(): Boolean {
    if (targetLane > GameConstants.LANE_LEFT) {
      targetLane--
      return true
    }
    return false
  }

  /**
   * Attempts to move right one lane.
   */
  fun moveRight(): Boolean {
    if (targetLane < GameConstants.LANE_RIGHT) {
      targetLane++
      return true
    }
    return false
  }

  /**
   * Resets player to starting position and lane.
   */
  fun reset() {
    position = Vector3(0f, 0f, 0f)
    targetLane = GameConstants.LANE_CENTER
    stridePhase = 0f
    tilt = 0f
    isMovingLane = false
  }
}
