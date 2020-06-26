import React, { useContext } from "react";
import Context from "../../Context";
import styles from "../WeatherData/WeatherData.module.css";

const WeatherData = () => {
  const { weather, city, country } = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.content_city}>
          {city}, {country},
        </p>
        <p className={styles.content_weather}>{weather} °С</p>
      </div>
    </div>
  );
};

export default WeatherData;
