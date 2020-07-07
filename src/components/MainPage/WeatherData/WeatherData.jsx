import React, { useContext } from "react";
import Context from "../../Context";

import Add from "../../СardPage/Buttons/Add";

import styles from "../WeatherData/WeatherData.module.css";

const WeatherData = () => {
  const { weather, city, country, error } = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.content_city}>
          {city}, {country}, {weather} °С
        </p>
        <Add />
      </div>
    </div>
  );
};

export default WeatherData;
