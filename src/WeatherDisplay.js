import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherDisplay.css";

export default function WeatherDisplay(props) {
  return (
    <div className="WeatherDisplay container">
      <div className="row">
        <div className="col">
          <ul className="cityInfo">
            <h1>{props.info.city}</h1>
            <FormattedDate date={props.info.date} />
            <li>light intensity drizzle</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img
            src="http://openweathermap.org/img/wn/09d@2x.png"
            alt={props.info.description}
          />{" "}
          {props.info.temperature}°C
        </div>
        <div className="col">
          <ul>
            <li>wind: {props.info.wind} km/h</li>
            <li>humidity: {props.info.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
