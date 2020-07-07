import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

const IMAGE_KEY = "rgQAMyD6QSGwGSORhBjman72L8V6X9sgs-mcmr5t6NA";

const SearchImages = () => {
  const [image, setImage] = useState();

  const image_req = async (e) => {
    e.preventDefault();
    const city = await e.target.city.value;
    const imageUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${IMAGE_KEY}`;
    const req = axios.get(imageUrl);
    const res = await req;
    setImage(res.data.results);

    console.log(res);
  };

  return (
    <Fragment>
      <form onSubmit={image_req}>
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
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <svg
                className="bi bi-search"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default SearchImages;
