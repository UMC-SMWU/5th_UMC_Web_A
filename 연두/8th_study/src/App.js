import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 200px;
  height: 36px;
  padding-left: 16px;
  border: 3px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1.5px;
  border-color: rgb(218, 218, 218);
`;

const CardBox = styled.div`
  margin-top: 10px;
  padding: 10px;
  width: 200px;
  height: 100px;
  display: flex;
  justify-contents: center;
  text-align: center;
  align-items: middle;
  border: 3px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1.5px;
  border-color: rgb(100, 100, 100);
`;

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
//const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

function App() {
  const [weather, setWeather] = useState({
    name: "",
    temp: "",
    descrip: "",
  });
  const [cityName, setCityName] = useState("");

  async function searchWeather() {
    const params = {
      q: cityName,
      appid: apiKey,
    };
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params,
        }
      );
      console.log(response);
      setWeather({
        name: cityName,
        temp: Math.round((response.data.main.temp - 273.15) * 10) / 10,
        descrip: response.data.weather[0].main,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchWeather();
    }
  };

  return (
    <div className="App">
      <StyledInput
        type="text"
        name="cityName"
        placeholder="도시명을 입력해주세요."
        onChange={(e) => setCityName(e.target.value)}
        onKeyUp={handleKeyDown}
      ></StyledInput>
      {weather.name && (
        <WeatherCard
          location={weather.name}
          temperature={weather.temp}
          descrip={weather.descrip}
        ></WeatherCard>
      )}
    </div>
  );
}

// visibility = hidden OR visible?

function WeatherCard(props) {
  return (
    <CardBox>
      <p style={{ margin: "0px", alignSelf: "flex-start" }}>{props.location}</p>
      <p
        style={{
          display: "flex",
          margin: "0 auto",
          fontSize: "40px",
          alignSelf: "center",
        }}
      >
        {props.temperature}℃
      </p>
      <p
        style={{
          display: "flex",
          margin: "0",
          alignSelf: "flex-end",
        }}
      >
        {props.descrip}
      </p>
    </CardBox>
  );
}

export default App;
