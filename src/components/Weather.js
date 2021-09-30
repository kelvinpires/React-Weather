import React from "react";
import "./Weather.css";

function Weather({ city, country, temp, icon, description }) {
  return (
    <div className="Weather">
      <div className="local-name">
        <h2>{city}</h2>
        <span>{country}</span>
      </div>
      <div className="temp-description">
        <div className="temp-now">
          <h1>{Math.round(temp)}</h1>
          <span>°C</span>
        </div>
        <img src={icon} alt={description} />
        <h2>{description.toUpperCase()}</h2>
      </div>
    </div>
  );
}

export { Weather };
