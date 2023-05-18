import React  from "react";
import { Link } from "react-router-dom";

import "./categories.css";
import { useFilter } from "context";
import { FILTER_BY_SECTION } from "utils";

const Categories = () => {
  const { dispatch } = useFilter()
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
            <Link
              to="/products"
              onClick={() =>
                dispatch({ type: FILTER_BY_SECTION, payload: "Mens" })
              }
            >
              Shop Now
            </Link>
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
              <Link
                to="/products"
                onClick={() =>
                  dispatch({ type: FILTER_BY_SECTION, payload: "Womens" })
                }
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="small-box">
            <img
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683872443/E-comm%20ATTIREX/Kids-Category_mg6fmz.webp"
              alt="Kids Category"
            />
            <div className="category-overlay">
              <h3>Kids</h3>
              <Link
                to="/products"
                onClick={() =>
                  dispatch({ type: FILTER_BY_SECTION, payload: "Kids" })
                }
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Categories };
