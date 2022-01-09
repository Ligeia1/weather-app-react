import React from "react";

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
      <div className="row">
        <div className="col">
          <ul>
            <li>Hannover</li>
            <li>Friday, December 17</li>
            <li>light intensity drizzle</li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <span>
              <li>3°C</li>{" "}
              <img src="http://openweathermap.org/img/wn/09d@2x.png" />
            </span>
            <li>max/min: 8°C | 6 °C </li>
            <li>wind: 2 km/h</li>
            <li>humidity: 92 %</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
