import React from "react";
import { Link } from "react-router-dom";

import "./clothingcategories.css";
import { useFilter } from "context";
import { CLEAR_FILTERS, FILTER_BY_CATEGORY } from "utils";

const ClothingCategories = () => {
  const { dispatch } = useFilter();
  const handleCategoryClick = (category) => {
    dispatch({ type: CLEAR_FILTERS }); 
    dispatch({ type: FILTER_BY_CATEGORY, payload: category }); 
  };
  return (
    <div className="clothing-categories-container">
      <div className="categories-title">
        <h2> CLOTHING CATEGORIES</h2>
      </div>
      <div className="category-block-note">
        We find the best suppliers and makers of fashion and fancy products.
      </div>
      <div className="clothing-categories">
        <div className="category">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911285/E-comm%20ATTIREX/ActiveWear_j3uzrc.jpg"
            alt="Activewear"
          />
          <div className="overlay">
            <div className="text">Activewear</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Active Wear")}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="category ">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911465/E-comm%20ATTIREX/WesternDress_xzucw4.jpg"
            alt="Dress"
          />
          <div className="overlay category-long">
            <div className="text"> Dresses</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Dresses")}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="category">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911560/E-comm%20ATTIREX/Office-Wear_o9xrse.jpg"
            alt="Office-Wear"
          />
          <div className="overlay">
            <div className="text">Office Wear</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Office Wear")}
            >
              Shop Now
            </Link>
          </div>
        </div>{" "}
        <div className="category">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911604/E-comm%20ATTIREX/Freestyle_suh2kw.jpg"
            alt="FreeStyle"
          />
          <div className="overlay">
            <div className="text"> Freestyle </div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Freestyle")}
            >
              Shop Now
            </Link>
          </div>
        </div>{" "}
        <div className="category">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911646/E-comm%20ATTIREX/Formal_hmsktj.jpg"
            alt="Formal"
          />
          <div className="overlay category-small">
            <div className="text">Formal</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Formal")}
            >
              Shop Now
            </Link>
          </div>
        </div>{" "}
        <div className="category">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911724/E-comm%20ATTIREX/FreestyleWomen_jmmd32.jpg"
            alt="Freestyle"
          />
          <div className="overlay category-small">
            <div className="text">Freestyle </div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Freestyle")}
            >
              Shop Now
            </Link>
          </div>
        </div>{" "}
        <div className="category">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911766/E-comm%20ATTIREX/CasualMen_hekinb.jpg"
            alt="Casual"
          />
          <div className="overlay category-small">
            <div className="text">Casual</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Casual")}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="category">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683911811/E-comm%20ATTIREX/Tops_fiapqb.jpg"
            alt="Tops"
          />
          <div className="overlay category-small">
            <div className="text">Tops</div>
            <Link
              to="/products"
              className="button"
              onClick={() => handleCategoryClick("Tops")}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ClothingCategories };
