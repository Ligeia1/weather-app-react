import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="Temperature">
        <span className="temperature">
          {" "}
          {props.celsius}{" "}
          <span className="units">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>{" "}
          </span>{" "}
        </span>
      </span>
    );
  } else {
    let tempFahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="Temperature">
        <span className="temperature">
          {" "}
          {Math.round(tempFahrenheit)}{" "}
          <span className="units">
            <a href="/" onClick={showCelsius}>
              {" "}
              °C
            </a>{" "}
            | °F{" "}
          </span>{" "}
        </span>
      </span>
    );
  }
}
