import React from "react";
// import Header from "../СardPage/Header/СardHeader";
// import Content from "../СardPage/Content/СardContent";
import Reload from "./Content/Buttons/Reload";
import Delete from "./Content/Buttons/Delete";

import styles from "../СardPage/СardPage.module.css";

const CardPage = ({ title, content }) => {
  return (
    <div className={`"card" + ${styles.container}`} style={{ width: "22rem" }}>
      <img
        src="https://cdnp.flypgs.com/files/Sehirler-long-tail/Kharkiv/kharkiv-sehir.jpg"
        className="card-img-top"
        alt="image"
      />
      <div className="card-body">
        <div className={`"content" + ${styles.content}`}>
          <h3 className={`"card-title" + ${styles.card_title}`}>{title},</h3>
          <p className={`"card-text" + ${styles.card_text}`}>{content} °С</p>
          <div className="btn-group" role="group" aria-label="Basic example">
            <Reload />
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
