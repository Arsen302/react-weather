import React, { useState, useEffect } from "react";
import { useSelector, useDespatch } from "react-redux";
import axios from "axios";

import styles from "./MainPage.module.css";

import Context from "../Context";
import Card from "../СardPage/СardPage";
import SearchWeather from "./SearchWeather/SearchWeather";
import WeatherData from "./WeatherData/WeatherData";

const WEATHER_KEY = "5a7f693e024afca9ebf76742e0b28dad";

const MainPage = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [error, setError] = useState();

  const api_req = async (e) => {
    e.preventDefault();
    const location = e.target.elements.city.value;
    if (!location) return setError("Введите название города"), setWeather(null);
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_KEY}&units=metric`;
    const req = axios.get(weatherUrl);
    const res = await req;
    setWeather(res.data.main.temp);
    setCity(res.data.name);
    setCountry(res.data.sys.country);

    console.log(res);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Context.Provider
          value={{
            api_req,
            weather,
            city,
            country,
          }}
        >
          <SearchWeather />
          {weather && <WeatherData />}
          <div className={styles.content}>
            <Card title="Kharkiv" content="+9" />
            <Card title="Tokyo" content="+12" />
            <Card title="Moscow" content="+3" />
            <Card title="Kiev" content="+10" />
            <Card title="Lviv" content="+15" />
            <Card title="New-York" content="+18" />
          </div>
        </Context.Provider>
      </div>
    </div>
  );
};

export default MainPage;
