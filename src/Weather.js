import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-6">
          <form>
            <input type="search" placeholder="Enter a city"></input>
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
        </div>
      </div>
      <ul className="cityInfo">
        <h1>Hannover</h1>
        <li>Friday, December 17</li>
        <li>light intensity drizzle</li>
      </ul>
      <div className="row">
        <div className="col">
          <img src="http://openweathermap.org/img/wn/09d@2x.png" /> 3°C
        </div>
        <div className="col">
          <ul>
            <li>max/min: 8°C | 6 °C </li>
            <li>wind: 2 km/h</li>
            <li>humidity: 92 %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
