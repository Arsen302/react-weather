import React from "react";
import Reload from "./Buttons/Reload";
import Delete from "./Buttons/Delete";

import styles from "../СardPage/СardPage.module.css";

const CardPage = ({ title, content }) => {
  return (
    <div className={`"card" + ${styles.container}`} style={{ width: "22rem" }}>
      <div className="card-body">
        <div className={`"content" + ${styles.content}`}>
          <h2 className={`"card-title" + ${styles.card_title}`}>{title},</h2>
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
