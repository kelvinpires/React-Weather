import React from "react";

function Weather({ city, country, temp, maxTemp, minTemp, icon, description }) {
  return (
    <>
      <div>
        <h2>{city}</h2>
        <span>{country}</span>
      </div>
      <div>
        <div>
          <img src={icon} alt={description} />
          <h2>{description}</h2>
        </div>
        <div>
          <h3>{maxTemp}</h3>
          <h3>{minTemp}</h3>
        </div>
      </div>
    </>
  );
}

export { Weather };
