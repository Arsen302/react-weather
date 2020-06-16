import React from "react";
import styles from "./MainPage.module.css";
import Card from "../СardPage/СardPage";

const MainScreen = ({ title, content }) => {
  const cardData = [
    {
      title: "Kharkiv",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "New - York",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Tokyo",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Kyiv",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Lviv",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "Moscow",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <label />
            <input type="text" className={styles.search} placeholder="Search" />
          </nav>
        </header>
        <main className={styles.content}>
          <div>
            <Card cards={cardData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainScreen;
