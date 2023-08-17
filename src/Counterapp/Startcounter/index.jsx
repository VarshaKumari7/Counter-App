import React from "react";
import "./timer.css";
export default function StartCounter() {
  return (
    <div>
      <div className="start-div">
        <button className="btn start">Start Counter</button>
      </div>
      <div className="timer">
        <span>0</span>
      </div>
    </div>
  );
}
