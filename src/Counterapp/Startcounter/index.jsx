import React, { useEffect, useState } from "react";
import "./timer.css";
export default function StartCounter() {
  const [timerValue, setTimerValue] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timeval;
    if (isTimerRunning) {
      timeval = setInterval(() => {
        setTimerValue((pretimeval) => pretimeval + 1);
      }, 1000);
    } else {
      clearInterval(timeval);
    }
    return () => {
      clearInterval(timeval);
    };
  }, [isTimerRunning]);

  const handleToggelButtonClick = () => {
    setIsTimerRunning(!isTimerRunning);
    // if (isTimerRunning) {
    //   setIsTimerRunning(false);
    // } else {
    //   setIsTimerRunning(true);
    // }
  };
  // console.log(" 21 span Value", timerValue);

  return (
    <div className="start-div">
      <button className="btn start" onClick={handleToggelButtonClick}>
        {isTimerRunning ? "Stop Counter" : "Start Counter"}
      </button>
      <div className="timer">
        <span>{timerValue}</span>
      </div>
    </div>
  );
}
