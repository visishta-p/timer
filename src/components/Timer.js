// src/components/Timer.js
import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = `0${Math.floor(time / 60)}`.slice(-2);
    const seconds = `0${time % 60}`.slice(-2);
    return `${minutes} : ${seconds}`;
  };

  return (
    <div className="timer">
      <h1>React Timer</h1>
      <div className="time-display">{formatTime(time)}</div>
      <div className="controls">
        <button onClick={handleStart} disabled={isActive}>Start</button>
        <button onClick={handlePause} disabled={!isActive}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
