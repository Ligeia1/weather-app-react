import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    return <p>hello</p>;
  }
  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <input type="search" placeholder="Please enter a city"></input>
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
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Hannover&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
