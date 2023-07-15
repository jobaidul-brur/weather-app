import React, { useState } from "react";
import "./App.css";
import { OPEN_WEATHER_API_URL, OPEN_WEATHER_API_KEY } from "./api";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import Search from "./components/search/Search";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${OPEN_WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responses) => {
        const currentWeatherResponse = await responses[0].json();
        const forecastResponse = await responses[1].json();
        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse,
        });
        setForecast({
          city: searchData.label,
          ...forecastResponse,
        });
      })
      .catch((error) => console.log(error));
  };

  console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
