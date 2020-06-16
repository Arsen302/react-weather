import React from "react";
import Header from "../СardPage/Header/СardHeader";
import Content from "../СardPage/Content/СardContent";

const CardPage = ({ title, content, cards }) => {
  const items = cards.map((item) => {
    return (
      <div>
        <li>
          <Header {...item} />
          <Content {...item} />
        </li>
      </div>
    );
  });

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default CardPage;
