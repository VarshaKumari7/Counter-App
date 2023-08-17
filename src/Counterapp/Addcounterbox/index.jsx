import React from "react";
import "./Addcounter.css";
export default function Addcounterbox({ onAddCounterClick }) {
  return (
    <div className="top-section">
      <button className="btn add " onClick={onAddCounterClick}>
        Add Counter
      </button>
      <button className="btn">0</button>
    </div>
  );
}
