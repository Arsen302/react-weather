import React from "react";
import styles from "../Header/СardHeader.module.css";

const СardHeader = ({ title }) => {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
    </header>
  );
};

export default СardHeader;
