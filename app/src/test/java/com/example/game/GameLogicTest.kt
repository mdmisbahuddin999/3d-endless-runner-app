package com.example.game

import com.example.game.math.Camera3D
import com.example.game.math.Vector3
import com.example.game.model.GameConstants
import com.example.game.model.Player
import com.example.game.ui.GameViewModel
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test

class GameLogicTest {

  @Test
  fun player_startsAtCenterLane() {
    val player = Player()
    assertEquals(GameConstants.LANE_CENTER, player.targetLane)
    assertEquals(0f, player.position.x, 0.001f)
    assertEquals(0f, player.position.z, 0.001f)
  }

  @Test
  fun player_movesForwardAutomatically() {
    val player = Player()
    val initialZ = player.position.z
    player.update(dt = 0.1f, speed = GameConstants.RUN_SPEED)

    assertTrue("Player Z should increase when moving forward", player.position.z > initialZ)
    assertEquals(GameConstants.RUN_SPEED * 0.1f, player.position.z, 0.01f)
  }

  @Test
  fun player_laneMovement_leftAndRightWithinThreeLanes() {
    val player = Player()
    assertEquals(GameConstants.LANE_CENTER, player.targetLane)

    // Move left from Center -> Left
    assertTrue(player.moveLeft())
    assertEquals(GameConstants.LANE_LEFT, player.targetLane)

    // Cannot move left beyond Left lane (clamped to 3 lanes)
    assertFalse(player.moveLeft())
    assertEquals(GameConstants.LANE_LEFT, player.targetLane)

    // Move right -> Center
    assertTrue(player.moveRight())
    assertEquals(GameConstants.LANE_CENTER, player.targetLane)

    // Move right -> Right
    assertTrue(player.moveRight())
    assertEquals(GameConstants.LANE_RIGHT, player.targetLane)

    // Cannot move right beyond Right lane
    assertFalse(player.moveRight())
    assertEquals(GameConstants.LANE_RIGHT, player.targetLane)
  }

  @Test
  fun camera_projectsPointsInFront_andClipsBehind() {
    val camera = Camera3D(position = Vector3(0f, 2.5f, 0f))

    // Point in front of camera (Z = 10f) should project successfully
    val projected = camera.project(Vector3(0f, 0f, 10f), screenWidth = 1080f, screenHeight = 2400f)
    assertNotNull(projected)

    // Point behind camera (Z = -5f) should clip to null
    val behind = camera.project(Vector3(0f, 0f, -5f), screenWidth = 1080f, screenHeight = 2400f)
    assertNull(behind)
  }

  @Test
  fun viewModel_tracksDistanceAndPause() {
    val viewModel = GameViewModel()
    assertTrue(viewModel.gameState.value.isRunning)

    // Update with 1 second elapsed
    viewModel.update(1.0f)
    assertTrue(viewModel.gameState.value.distanceMeters > 0)

    // Toggle pause
    viewModel.togglePlayPause()
    assertFalse(viewModel.gameState.value.isRunning)

    val distanceBeforePause = viewModel.player.position.z
    // Update while paused should not advance distance
    viewModel.update(1.0f)
    assertEquals(distanceBeforePause, viewModel.player.position.z, 0.001f)
  }
}
