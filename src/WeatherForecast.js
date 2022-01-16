import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="container">
        <div className="text-center d-flex justify-content-evenly">
          <span className="forecast-day">Mon</span>
          <span>icon</span>
          <span>
            <span>max </span>|<span> min </span>
          </span>
        </div>
      </div>
    </div>
  );
}
