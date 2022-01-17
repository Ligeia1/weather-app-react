import React from "react";
import "./WeatherForecastDay.css";

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
            <img
              src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt={props.data.weather[0].description}
              className="float-left"
              width={50}
            />
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
