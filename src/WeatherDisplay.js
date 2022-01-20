import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
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
      <div className="row weather-information">
        <div className="col-sm-7">
          <div className="clearfix">
            <img
              src={props.info.icon}
              alt={props.info.description}
              className="float-left"
              width={110}
            />{" "}
            <Temperature celsius={props.info.temperature} />
          </div>
        </div>
        <div className="col-sm-5">
          <ul className="mt-3">
            <li>
              <span className="weather-info">wind:</span> {props.info.wind} km/h
            </li>
            <li>
              <span className="weather-info">humidity:</span>{" "}
              {props.info.humidity}%
            </li>
            <li>
              <span className="weather-info">feels like:</span>{" "}
              {props.info.feels}°C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
