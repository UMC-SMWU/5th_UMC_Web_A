import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "39cd82e87ac89bd2b6d8850dad7dd268";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async () => {
    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchWeather();
    }
  };

  return (
    <div className="Container">
      <input
        type="text"
        placeholder="도시를 입력하세요"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyPress}
        className="CenterInput"
      />
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>
            Temperature:{" "}
            {Math.round((weatherData.main.temp - 273.15) * 10) / 10} C{" "}
          </p>
          <p>Weather: {weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
