import React, { useState, useCallback } from 'react';
import { GameCanvas } from './components/GameCanvas';
import { HUD } from './components/HUD';
import { LANE_CENTER, LANE_LEFT, LANE_RIGHT } from './types/game';

export const App: React.FC = () => {
  const [distance, setDistance] = useState(0);
  const [currentLane, setCurrentLane] = useState(LANE_CENTER);
  const [isRunning, setIsRunning] = useState(true);

  // Trigger counters for steering button clicks
  const [moveLeftTrigger, setMoveLeftTrigger] = useState(0);
  const [moveRightTrigger, setMoveRightTrigger] = useState(0);

  // Key to reset GameCanvas component
  const [resetKey, setResetKey] = useState(0);

  const handleMoveLeft = useCallback(() => {
    setMoveLeftTrigger((prev) => prev + 1);
  }, []);

  const handleMoveRight = useCallback(() => {
    setMoveRightTrigger((prev) => prev + 1);
  }, []);

  const handleTogglePause = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setDistance(0);
    setCurrentLane(LANE_CENTER);
    setIsRunning(true);
    setResetKey((prev) => prev + 1);
  }, []);

  const handleDistanceUpdate = useCallback((newDist: number) => {
    setDistance(newDist);
  }, []);

  const handleLaneChange = useCallback((newLane: number) => {
    setCurrentLane(newLane);
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* Phone Viewport Container */}
      <div className="relative w-full h-full max-w-[480px] max-h-[960px] bg-slate-900 md:rounded-3xl md:overflow-hidden md:border md:border-slate-800 md:shadow-2xl shadow-sky-950/20">
        <GameCanvas
          key={resetKey}
          isRunning={isRunning}
          currentLane={currentLane}
          onDistanceUpdate={handleDistanceUpdate}
          onLaneChange={handleLaneChange}
          triggerMoveLeft={moveLeftTrigger}
          triggerMoveRight={moveRightTrigger}
        />

        <HUD
          distance={distance}
          currentLane={currentLane}
          isRunning={isRunning}
          onTogglePause={handleTogglePause}
          onReset={handleReset}
          onMoveLeft={handleMoveLeft}
          onMoveRight={handleMoveRight}
        />
      </div>
    </div>
  );
};

export default App;
