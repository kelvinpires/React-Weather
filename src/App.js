import "./App.css";
import React, { useState } from "react";
import { Form } from "./components/Form";
import { Weather } from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const handleSubmit = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setWeather((prev) => [...prev, data]);
  };

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} city={(e) => setCity(e.target.value)} />

      {weather.map((item) => (
        <div key={item.id}>
          <Weather
            city={item.name}
            country={item.sys.country}
            temp={item.main.temp}
            maxTemp={item.main["temp_max"]}
            minTemp={item.main["temp_min"]}
            icon={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${item.weather[0]["icon"]}.svg`}
            description={item.weather[0].description}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
