import React from "react";
import { Link } from "react-router-dom";

import "./carousel.css";

const Carousel = () => {
  return (
    <section className="carousel">
      <div className="banner">
        <div className="banner-text">
          <h2>Get 20% off on your first order!</h2>
          <p>Use code FIRST20 at checkout</p>
          <Link to="/products" className="btn">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Carousel };
