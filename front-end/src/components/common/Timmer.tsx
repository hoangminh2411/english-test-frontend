'use client';
import React, { useState, useEffect, useRef } from 'react';

interface TimerProps {
  totalTime: number; // total time in seconds
  start: boolean; // start control from outside
}

const Timer: React.FC<TimerProps> = ({ totalTime, start }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  };

  const pauseTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    if (start) {
      startTimer();
    } else {
      pauseTimer();
    }
  }, [start]);

  useEffect(() => {
    if (timeLeft === 0 && timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, [timeLeft]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return <div className="text-2xl font-bold text-gray-800">{formatTime(timeLeft)}</div>;
};

export default Timer;
