package com.example.game.model

/**
 * Core constants for track layout, lanes, and running speed.
 */
object GameConstants {
  const val LANE_LEFT = -1
  const val LANE_CENTER = 0
  const val LANE_RIGHT = 1

  const val LANE_WIDTH = 1.2f
  const val TOTAL_LANES = 3

  // Total track width covers 3 lanes (-1.8f to +1.8f)
  const val TRACK_HALF_WIDTH = 1.8f
  const val CURB_WIDTH = 0.28f

  // Forward running speed (units per second)
  const val RUN_SPEED = 11.0f

  // Visual segment parameters
  const val SEGMENT_LENGTH = 2.5f
  const val RENDER_DISTANCE = 70.0f
}
