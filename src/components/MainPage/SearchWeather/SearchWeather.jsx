import React, { useContext } from "react";
import Context from "../../Context";

import styles from "../SearchWeather/SearchWeather.module.css";
import Search from "../../СardPage/Buttons/Search";

const SearchWeather = () => {
  const { api_req } = useContext(Context);
  return (
    <div>
      <form onSubmit={api_req}>
        <div className="input-group mb-3">
          <input
            type="text"
            name="city"
            placeholder="Узнай какая погода!"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <Search />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchWeather;
