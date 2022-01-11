import React from "react";
import WeatherSearch from "./WeatherSearch.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="Hannover" />

        <footer>
          This project was coded by Olga Mang and is open-sourced on{" "}
          <a
            href="https://github.com/Ligeia1/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/gifted-ptolemy-a45c0a/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
