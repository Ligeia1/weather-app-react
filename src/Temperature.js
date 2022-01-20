import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <span className="Temperature">
      <span className="temperature">
        {" "}
        {props.celsius} <span className="units">°C</span>{" "}
      </span>
    </span>
  );
}
