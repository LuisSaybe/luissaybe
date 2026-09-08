import { useEffect, useRef, useState } from 'react';

import './index.css';

const STORAGE_KEY = 'quadrant-timers';
const QUADRANT_COUNT = 4;

function loadElapsedTimes() {
  try {
    const savedTimes: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');

    if (!Array.isArray(savedTimes)) {
      return Array<number>(QUADRANT_COUNT).fill(0);
    }

    return Array.from({ length: QUADRANT_COUNT }, (_, index) => {
      const value = savedTimes[index];
      return typeof value === 'number' && Number.isFinite(value) && value >= 0
        ? value
        : 0;
    });
  } catch {
    return Array<number>(QUADRANT_COUNT).fill(0);
  }
}

function formatElapsedTime(elapsedMs: number) {
  const totalSeconds = Math.floor(elapsedMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function Time() {
  const [elapsedTimes, setElapsedTimes] = useState(loadElapsedTimes);
  const [running, setRunning] = useState<boolean[]>(
    () => Array<boolean>(QUADRANT_COUNT).fill(false),
  );
  const startedAt = useRef<(number | null)[]>(Array(QUADRANT_COUNT).fill(null));
  const intervals = useRef<(number | null)[]>(Array(QUADRANT_COUNT).fill(null));

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(elapsedTimes));
    } catch {
      // Keep the timers usable when browser storage is unavailable.
    }
  }, [elapsedTimes]);

  useEffect(() => () => {
    intervals.current.forEach((interval) => {
      if (interval !== null) {
        window.clearInterval(interval);
      }
    });
  }, []);

  const startTimer = (index: number) => {
    if (intervals.current[index] !== null) {
      return;
    }

    startedAt.current[index] = Date.now();
    setRunning((current) => current.map((isRunning, timerIndex) => (
      timerIndex === index ? true : isRunning
    )));

    intervals.current[index] = window.setInterval(() => {
      const now = Date.now();
      const startTime = startedAt.current[index];

      if (startTime === null) {
        return;
      }

      startedAt.current[index] = now;
      setElapsedTimes((current) => current.map((elapsed, timerIndex) => (
        timerIndex === index ? elapsed + (now - startTime) : elapsed
      )));
    }, 250);
  };

  const stopTimer = (index: number) => {
    const interval = intervals.current[index];

    if (interval === null) {
      return;
    }

    window.clearInterval(interval);
    intervals.current[index] = null;

    const now = Date.now();
    const startTime = startedAt.current[index];

    if (startTime !== null) {
      setElapsedTimes((current) => current.map((elapsed, timerIndex) => (
        timerIndex === index ? elapsed + (now - startTime) : elapsed
      )));
    }

    startedAt.current[index] = null;
    setRunning((current) => current.map((isRunning, timerIndex) => (
      timerIndex === index ? false : isRunning
    )));
  };

  const resetTimer = (index: number) => {
    const interval = intervals.current[index];

    if (interval !== null) {
      window.clearInterval(interval);
    }

    intervals.current[index] = null;
    startedAt.current[index] = null;
    setRunning((current) => current.map((isRunning, timerIndex) => (
      timerIndex === index ? false : isRunning
    )));
    setElapsedTimes((current) => current.map((elapsed, timerIndex) => (
      timerIndex === index ? 0 : elapsed
    )));
  };

  return (
    <main className="time-page" aria-label="Four quadrant timers">
      {elapsedTimes.map((elapsed, index) => (
        <section className={`time-quadrant time-quadrant-${index + 1}`} key={index}>
          <output className="time-display" aria-live="off">
            {formatElapsedTime(elapsed)}
          </output>

          <div className="time-controls">
            <button
              type="button"
              onClick={() => startTimer(index)}
              disabled={running[index]}
            >
              Start
            </button>
            <button
              type="button"
              onClick={() => stopTimer(index)}
              disabled={!running[index]}
            >
              Stop
            </button>
            <button
              type="button"
              onClick={() => resetTimer(index)}
            >
              Reset
            </button>
          </div>
        </section>
      ))}
    </main>
  );
}
