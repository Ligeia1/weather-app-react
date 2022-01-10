import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    console.log(response.data);
    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed * 3.6,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <div className="WeatherSearch container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Please enter a city"
                autoFocus="on"
                onChange={handleCityChange}
              ></input>
            </form>
          </div>
          <div className="col-2">
            <form>
              <input
                className="btn btn-primary"
                type="submit"
                value="Search"
              ></input>
            </form>
            <WeatherDisplay data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
