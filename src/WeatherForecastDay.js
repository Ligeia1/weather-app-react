import React from "react";
import "./WeatherForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let tempMax = Math.round(props.data.temp.max);
  let tempMin = Math.round(props.data.temp.min);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="container">
        <div className="text-center d-flex justify-content-evenly">
          <span className="forecast-day">{day()}</span>
          <span className="weather-icon">
            <WeatherIcon code={props.data.weather[0].icon} width={50} />
          </span>
          <span>
            <span className="tempMax">{tempMax}°C </span>|
            <span className="tempMin"> {tempMin}°C</span>
          </span>
        </div>
      </div>
    </div>
  );
}
