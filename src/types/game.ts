export const LANE_WIDTH = 2.4;
export const LANE_LEFT = -1;
export const LANE_CENTER = 0;
export const LANE_RIGHT = 1;

export const FORWARD_SPEED = 18.0;
export const LANE_LERP_SPEED = 12.0;

export interface GameState {
  distance: number;
  isRunning: boolean;
  currentLane: number;
}
