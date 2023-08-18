import React, { useEffect, useState } from "react";
import "./timer.css";
export default function StartCounter({ id, onTimerValueChange }) {
  const [timerValue, setTimerValue] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleTimerChange = (amount) => {
    setTimerValue((preValue) => preValue + amount);
    onTimerValueChange(id, amount);
  };

  useEffect(() => {
    let timeval;
    if (isTimerRunning) {
      timeval = setInterval(() => {
        handleTimerChange(1);
      }, 1000);
    } else {
      clearInterval(timeval);
    }
    return () => {
      clearInterval(timeval);
    };
  }, [isTimerRunning, id]);

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
