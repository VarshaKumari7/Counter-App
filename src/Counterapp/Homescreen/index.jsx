import React, { useState } from "react";
import "../Startcounter/timer.css";
import Addcounterbox from "../Addcounterbox";
import StartCounter from "../Startcounter";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const handleAddCounterClick = () => {
    setCount(count + 1);
  };

  return (
    <div
      className="container"
      style={{
        height: "100vh",
        background: "linear-gradient(180deg,#020024,#4b4b9a 35%,#fff)",
        fontFamily: "sans-serif",
      }}
    >
      <Addcounterbox onAddCounterClick={handleAddCounterClick} />
      <div className="counter-box">
        {Array.from({ length: count }).map((ele, index) => (
          <StartCounter key={index} />
        ))}
      </div>
    </div>
  );
}
