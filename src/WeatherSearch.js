import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch container">
        <form onSubmit={handleSubmit}>
          <div className="row m-4">
            <div className="col">
              <input
                type="search"
                placeholder="Please enter a city"
                autoFocus="on"
                className="form-control"
                onChange={handleCityUpdate}
              ></input>
            </div>
            <div className="col">
              <input
                className="btn btn-primary"
                type="submit"
                value="Search"
              ></input>
            </div>
          </div>
        </form>
        <WeatherDisplay info={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
