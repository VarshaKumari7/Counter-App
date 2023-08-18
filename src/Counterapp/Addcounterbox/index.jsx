import React from "react";
import "./Addcounter.css";
export default function Addcounterbox({ onAddCounterClick, counters }) {
  const calculateTotaltimerValue = () => {
    return counters.reduce((sum, counter) => sum + counter.timerValue, 0);
  };
  return (
    <div className="top-section">
      <button className="btn add " onClick={onAddCounterClick}>
        Add Counter
      </button>
      <button className="btn">{calculateTotaltimerValue()}</button>
    </div>
  );
}
