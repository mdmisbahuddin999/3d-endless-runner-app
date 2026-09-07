package com.example.game.math

/**
 * Lightweight 3D perspective camera tailored for a third-person endless runner view.
 */
class Camera3D(
  var position: Vector3 = Vector3(0f, 2.7f, -4.2f),
  var targetY: Float = 1.0f
) {
  /**
   * Projects a 3D world coordinate to 2D screen coordinate.
   * Returns null if the point is behind the near clipping plane.
   */
  fun project(
    worldPoint: Vector3,
    screenWidth: Float,
    screenHeight: Float,
    horizonRatio: Float = 0.45f
  ): Point2D? {
    val dz = worldPoint.z - position.z
    if (dz <= 0.15f) return null

    val dx = worldPoint.x - position.x
    val dy = worldPoint.y - position.y

    val fov = screenHeight * 0.85f
    val screenX = (screenWidth * 0.5f) + (dx / dz) * fov
    val screenY = (screenHeight * horizonRatio) - (dy / dz) * fov

    return Point2D(screenX, screenY, dz)
  }

  /**
   * Updates camera position to follow the player smoothly.
   */
  fun follow(playerPos: Vector3) {
    position = Vector3(
      x = playerPos.x * 0.45f,
      y = 2.7f,
      z = playerPos.z - 4.2f
    )
  }
}
