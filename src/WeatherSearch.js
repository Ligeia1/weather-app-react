import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForecast from "./WeatherForecast";
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
      feels: Math.round(response.data.main.feels_like),
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
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

  function loadPosition(position) {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(loadPosition);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <div className="container-fluid d-flex align-content-start flex-wrap">
          <form onSubmit={handleSubmit}>
            <div className="row mt-4 mb-3">
              <div className="col">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="on"
                  className="form-control searchbar shadow-sm"
                  onChange={handleCityUpdate}
                ></input>
              </div>
              <div className="col">
                <input
                  className="btn btn-primary shadow-sm"
                  type="submit"
                  value="Search"
                ></input>
              </div>
              <div className="col">
                <input
                  className="btn btn-primary shadow-sm position-button"
                  type="submit"
                  value="My Position📍"
                  onClick={getPosition}
                ></input>
              </div>
            </div>
          </form>
        </div>
        <WeatherDisplay info={weatherData} />
        <hr />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
