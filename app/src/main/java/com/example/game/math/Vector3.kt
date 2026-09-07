package com.example.game.math

/**
 * Lightweight 3D vector representation for coordinates, dimensions, and transformations.
 */
data class Vector3(
  val x: Float = 0f,
  val y: Float = 0f,
  val z: Float = 0f
) {
  operator fun plus(other: Vector3) = Vector3(x + other.x, y + other.y, z + other.z)
  operator fun minus(other: Vector3) = Vector3(x - other.x, y - other.y, z - other.z)
  operator fun times(scalar: Float) = Vector3(x * scalar, y * scalar, z * scalar)
  operator fun div(scalar: Float) = Vector3(x / scalar, y / scalar, z / scalar)

  fun lengthSq(): Float = x * x + y * y + z * z
  fun length(): Float = kotlin.math.sqrt(lengthSq())

  fun rotateY(angleRad: Float): Vector3 {
    val cos = kotlin.math.cos(angleRad)
    val sin = kotlin.math.sin(angleRad)
    return Vector3(
      x = x * cos + z * sin,
      y = y,
      z = -x * sin + z * cos
    )
  }

  fun rotateZ(angleRad: Float): Vector3 {
    val cos = kotlin.math.cos(angleRad)
    val sin = kotlin.math.sin(angleRad)
    return Vector3(
      x = x * cos - y * sin,
      y = x * sin + y * cos,
      z = z
    )
  }
}

/**
 * 2D point projected on the screen canvas with depth value for depth-sorting/clipping.
 */
data class Point2D(
  val x: Float,
  val y: Float,
  val depth: Float
)
