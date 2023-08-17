import React from "react";
import Addcounter from "../Addcounter";
import StartCounter from "../Startcounter";

export default function HomeScreen() {
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        background: "linear-gradient(180deg,#020024,#4b4b9a 35%,#fff)",
        fontFamily: "sans-serif",
      }}
    >
      <Addcounter />
      <div className="counter-box">
        <StartCounter />
      </div>
    </div>
  );
}
