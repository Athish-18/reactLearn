import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTime() {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="flex flex-col justify-center items-center mt-20 border-2 border-black w-80 h-60 m-auto p-5 rounded-lg shadow-lg bg-yellow-300">
      <p className="text-5xl font-bold">{formatTime()}</p>

      <div className="flex gap-5 mt-5">
        <button onClick={start} className="bg-red-400 p-3 text-xl rounded-md">
          Start
        </button>

        <button
          onClick={reset}
          className="bg-orange-300 p-3 text-xl rounded-md"
        >
          Reset
        </button>

        <button
          onClick={stop}
          className="bg-fuchsia-400 p-3 text-xl rounded-md"
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
