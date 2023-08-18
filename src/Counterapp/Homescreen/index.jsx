import React, { useState } from "react";
import "../Startcounter/timer.css";
import Addcounterbox from "../Addcounterbox";
import StartCounter from "../Startcounter";

export default function HomeScreen() {
  const [counters, setCounters] = useState([]);
  //   const [totalTimervalue, setTotalTimerValue] = useState(0);

  const handleAddCounterClick = () => {
    const newCounter = {
      id: counters.length,
      timerValue: 0,
    };
    setCounters([...counters, newCounter]);
  };
  console.log("17", counters);

  const handleTimerValueChange = (id, timerValue) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id
          ? { ...counter, timerValue: counter.timerValue + timerValue }
          : counter
      )
    );
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
      <Addcounterbox
        onAddCounterClick={handleAddCounterClick}
        counters={counters}
      />
      <div className="counter-box">
        {counters.map((counter) => (
          <StartCounter
            key={counter.id}
            id={counter.id}
            timerValue={counter.timerValue}
            onTimerValueChange={handleTimerValueChange}
          />
        ))}
      </div>
    </div>
  );
}
