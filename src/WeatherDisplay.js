import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay container">
      return (
      <WeatherSearch defaultCity="Hannover" />
      <ul className="cityInfo">
        <h1>Hannover</h1>
        <li>Friday, December 17</li>
        <li>light intensity drizzle</li>
      </ul>
      <div className="row">
        <div className="col">
          <img src="http://openweathermap.org/img/wn/09d@2x.png" /> 3°C
        </div>
        <div className="col">
          <ul>
            <li>max/min: 8°C | 6 °C </li>
            <li>wind: 2 km/h</li>
            <li>humidity: %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
