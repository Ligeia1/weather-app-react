import React from "react";

export default function WeatherForecastDay(props) {
  <div className="WeatherForecastDay">
    <div className="text-center d-flex justify-content-evenly">
      <span className="forecast-day">Mon</span>
      <span className="weather-icon">icon</span>
      <span>
        <span className="tempMax">{props.data.temp.max} </span>|
        <span className="tempMin"> min </span>
      </span>
    </div>
  </div>;
}
