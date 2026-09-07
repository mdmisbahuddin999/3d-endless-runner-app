import React from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { LANE_LEFT, LANE_CENTER, LANE_RIGHT } from '../types/game';

interface HUDProps {
  distance: number;
  currentLane: number;
  isRunning: boolean;
  onTogglePause: () => void;
  onReset: () => void;
  onMoveLeft: () => void;
  onMoveRight: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  distance,
  currentLane,
  isRunning,
  onTogglePause,
  onReset,
  onMoveLeft,
  onMoveRight,
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-4 z-10 select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pointer-events-auto">
        {/* Distance Tracker */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Distance
          </span>
          <span className="text-lg font-black text-sky-400 tabular-nums">
            {distance} m
          </span>
        </div>

        {/* Top Control Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            title="Restart run"
            className="w-11 h-11 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-slate-300 hover:text-white active:scale-95 flex items-center justify-center transition-transform shadow-lg"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={onTogglePause}
            title={isRunning ? 'Pause' : 'Resume'}
            className="w-11 h-11 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-800 text-sky-400 hover:text-sky-300 active:scale-95 flex items-center justify-center transition-transform shadow-lg"
          >
            {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
        </div>
      </div>

      {/* Bottom Steering Controls */}
      <div className="flex items-center justify-between pointer-events-auto pb-2">
        {/* Left Move Button */}
        <button
          onClick={onMoveLeft}
          disabled={currentLane <= LANE_LEFT}
          className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border transition-all shadow-xl active:scale-95 ${
            currentLane > LANE_LEFT
              ? 'bg-slate-900/90 border-slate-700 text-sky-400 hover:bg-slate-800'
              : 'bg-slate-950/40 border-slate-900/40 text-slate-600 cursor-not-allowed'
          }`}
          aria-label="Move left lane"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* 3-Lane Indicator Pill */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
          <div
            className={`w-7 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${
              currentLane === LANE_LEFT
                ? 'bg-sky-500 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            L
          </div>
          <div
            className={`w-7 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${
              currentLane === LANE_CENTER
                ? 'bg-sky-500 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            C
          </div>
          <div
            className={`w-7 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${
              currentLane === LANE_RIGHT
                ? 'bg-sky-500 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            R
          </div>
        </div>

        {/* Right Move Button */}
        <button
          onClick={onMoveRight}
          disabled={currentLane >= LANE_RIGHT}
          className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md border transition-all shadow-xl active:scale-95 ${
            currentLane < LANE_RIGHT
              ? 'bg-slate-900/90 border-slate-700 text-sky-400 hover:bg-slate-800'
              : 'bg-slate-950/40 border-slate-900/40 text-slate-600 cursor-not-allowed'
          }`}
          aria-label="Move right lane"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Paused Overlay */}
      {!isRunning && (
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm pointer-events-auto flex items-center justify-center p-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-xs w-full text-center shadow-2xl animate-fade-in">
            <h2 className="text-xl font-black text-white uppercase tracking-wider mb-2">
              Game Paused
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Distance: <span className="font-semibold text-sky-400">{distance} m</span>
            </p>

            <button
              onClick={onTogglePause}
              className="w-full py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 active:scale-98 text-white font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              Resume Run
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
