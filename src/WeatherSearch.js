import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let city = "Hannover";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherSearch container">
      <form>
        <input
          type="search"
          placeholder="Please enter a city"
          autoFocus="on"
          className="form-control"
        ></input>
        <input className="btn btn-primary" type="submit" value="Search"></input>
      </form>
      <WeatherDisplay />
    </div>
  );
}
