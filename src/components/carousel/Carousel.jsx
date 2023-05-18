import React from "react";
import { Link } from "react-router-dom";

import "./carousel.css";
import { useFilter } from "context";
import { CLEAR_FILTERS } from "utils";

const Carousel = () => {
  const { dispatch } = useFilter();
  return (
    <section className="carousel">
      <div className="banner">
        <div className="banner-text">
          <h2>Get 20% off on your first order!</h2>
          <p>Use code FIRST20 at checkout</p>
          <Link
            to="/products"
            className="btn"
            onClick={() => dispatch({ type: CLEAR_FILTERS })}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Carousel };
