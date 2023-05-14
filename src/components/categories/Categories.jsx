import React from "react";
import { Link } from "react-router-dom";

import "./categories.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories-container">
        <h2>CATEGORIES</h2>
      </div>
      <p class="categories-block-note">
        We find the best suppliers and makers of fashion and fancy products.
      </p>
      <div className="container">
        <div className="big-box">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683872441/E-comm%20ATTIREX/Mens-Category_zjicre.webp"
            alt="Mens Category"
          />
          <div className="category-overlay">
            <h3>Mens</h3>
            <Link to="/mens">Shop Now</Link>
          </div>
        </div>
        <div className="small-box-grid">
          <div className="small-box">
            <img
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911125/E-comm%20ATTIREX/Womens-Category_iscqhs.jpg"
              alt="Womens Category"
            />

            <div className="category-overlay">
              <h3>Womens</h3>
              <Link to="/womens">Shop Now</Link>
            </div>
          </div>
          <div className="small-box">
            <img
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683872443/E-comm%20ATTIREX/Kids-Category_mg6fmz.webp"
              alt="Kids Category"
            />
            <div className="category-overlay">
              <h3>Kids</h3>
              <Link to="/kids">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Categories };
