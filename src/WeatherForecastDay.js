import React from "react";

export default function WeatherForecastDay() {
  return (
    <div className="WeatherForecastDay">
      <div className="text-center d-flex justify-content-evenly">
        <span className="forecast-day">Mon</span>
        <span className="weather-icon">icon</span>
        <span>
          <span className="tempMax">max </span>|
          <span className="tempMin"> min </span>
        </span>
      </div>
    </div>
  );
}
