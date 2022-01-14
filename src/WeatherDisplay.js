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
            <li className="text-capitalize">{props.info.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="clearfix">
            <img
              src={props.info.icon}
              alt={props.info.description}
              className="float-left"
            />{" "}
            <span className="temperature">
              {" "}
              {props.info.temperature} <span className="units">°C</span>{" "}
            </span>
          </div>
        </div>
        <div className="col">
          <ul className="mt-3">
            <li>wind: {props.info.wind} km/h</li>
            <li>humidity: {props.info.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
