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
      <div className="row">
        <div className="col-7">
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
        <div className="col-5">
          <ul className="mt-3">
            <li>wind: {props.info.wind} km/h</li>
            <li>humidity: {props.info.humidity}%</li>
            <li>feels like: {props.info.feels}°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
