import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";
import "./WeatherSearch.css";
import FormattedDate from "./FormattedDate";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humiditiy: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/09d@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (ready) {
    return (
      <div className="WeatherSearch container">
        <form>
          <input
            type="search"
            placeholder="Please enter a city"
            autoFocus="on"
            className="form-control"
          ></input>
          <input
            className="btn btn-primary"
            type="submit"
            value="Search"
          ></input>
        </form>
        <FormattedDate date={weatherData.date} />
        <WeatherDisplay />
      </div>
    );
  } else {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let city = "Hannover";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
