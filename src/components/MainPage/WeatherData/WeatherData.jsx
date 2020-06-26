import React, { useContext } from "react";
import Context from "../../Context";
import styles from "../WeatherData/WeatherData.module.css";

const WeatherData = () => {
  const { weather, city, country } = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.content_city}>
          {city}, {country}, {weather} °С
        </p>
        {/* подумать как красиво перенести погоду на другую строку */}
        <p className={styles.content_weather}></p>
      </div>
    </div>
  );
};

export default WeatherData;
