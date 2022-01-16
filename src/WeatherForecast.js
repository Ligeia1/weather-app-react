import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  function getForecast() {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="WeatherForecast">
      <div className="container">
        <div className="text-center d-flex justify-content-evenly">
          <span className="forecast-day">Mon</span>
          <span className="weather-icon">icon</span>
          <span>
            <span className="tempMax">max </span>|
            <span className="tempMin"> min </span>
          </span>
        </div>
      </div>
    </div>
  );
}
