import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city"></input>
        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}
