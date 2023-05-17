import React, { useState } from "react";

import { useProductsData } from "context";
import "./filterssidebar.css";

const FiltersSidebar = () => {
  const { state, dispatch } = useProductsData();
  const { selectedSections, selectedCategory, sortByPrice } = state;
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Action dispatcher functions
  const handleSortByRating = (rating) => {
    dispatch({ type: "SORT_BY_RATING", payload: rating });
  };

  const handleSectionToggle = (section) => {
    dispatch({ type: "FILTER_BY_SECTION", payload: section });
  };

  const handleCategoryFilter = (category) => {
    dispatch({ type: "FILTER_BY_CATEGORY", payload: category });
  };

  return (
    <>
      <section
        className={showMobileFilters ? "mobile-filters-form" : "filters "}
      >
        <div className="filter-product-sidebar">
          <div className="filter-header">
            {showMobileFilters ? (
              <span
                className="filter-clear-button"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
              >
                APPLY
              </span>
            ) : (
              <span>FILTERS</span>
            )}
            <span
              className="filter-clear-button"
              onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
            >
              CLEAR
            </span>
          </div>
          <hr />
          {/*--------------------------------- Sort By filters----------------------------------------- */}
          <div className="filter-sort-by">
            <span className="filter-heading">SORT BY</span>
            <div>
              <input
                type="radio"
                id="highToLow"
                name="priceSort"
                value="highToLow"
                checked={sortByPrice === "highToLow"}
                onChange={() =>
                  dispatch({ type: "SORT_PRODUCTS", payload: "highToLow" })
                }
              />
              <label htmlFor="highToLow">Price: High to Low</label>
            </div>

            <div>
              <input
                type="radio"
                id="lowToHigh"
                name="priceSort"
                value="lowToHigh"
                checked={sortByPrice === "lowToHigh"}
                onChange={() =>
                  dispatch({ type: "SORT_PRODUCTS", payload: "lowToHigh" })
                }
              />
              <label htmlFor="lowToHigh">Price: Low to High</label>
            </div>
            <div>
              <input
                type="radio"
                id="aToz"
                name="priceSort"
                value="aToz"
                checked={sortByPrice === "aToz"}
                onChange={() =>
                  dispatch({ type: "SORT_PRODUCTS", payload: "aToz" })
                }
              />
              <label htmlFor="aToz">Category: A to Z</label>
            </div>
            <div>
              <input
                type="radio"
                id="zToa"
                name="priceSort"
                value="zToa"
                checked={sortByPrice === "zToa"}
                onChange={() =>
                  dispatch({ type: "SORT_PRODUCTS", payload: "zToa" })
                }
              />
              <label htmlFor="zToa">Category: Z to A</label>
            </div>
          </div>
          <hr />
          {/*--------------------------------- Price Slider----------------------------------------- */}
          <div className="price-slider">
            <span className="filter-heading">SLIDER</span>
            <input
              type="range"
              min="800"
              max="12000"
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_PRICE_RANGE",
                  payload: {
                    min: 0,
                    max: parseInt(e.target.value),
                  },
                })
              }
            />
          </div>
          <hr />
          {/*--------------------------------- Filter By Rating----------------------------------------- */}
          <div className="filter-by-rating">
            <span className="filter-heading">RATINGS</span>
            <div>
              <input
                type="checkbox"
                name="4stars"
                value="4stars"
                checked={state.sortByRating === "4stars"}
                onChange={() => handleSortByRating("4stars")}
              />
              <label>4 ⭐️ and above</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="3stars"
                value="3stars"
                checked={state.sortByRating === "3stars"}
                onChange={() => handleSortByRating("3stars")}
              />
              <label>3 ⭐️ and above</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="2stars"
                value="2stars"
                checked={state.sortByRating === "2stars"}
                onChange={() => handleSortByRating("2stars")}
              />
              <label>2 ⭐️ and above</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="1star"
                value="1star"
                checked={state.sortByRating === "1stars"}
                onChange={() => handleSortByRating("1star")}
              />
              <label>1 ⭐️ and above</label>
            </div>
          </div>
          <hr />
          {/*--------------------------------- Sort By Section----------------------------------------- */}
          <div className="filter-by-section">
            <span className="filter-heading">SECTION</span>
            <div>
              <input
                type="checkbox"
                name="Womens"
                value="Womens"
                checked={selectedSections.includes("Womens")}
                onChange={() => handleSectionToggle("Womens")}
              />
              <label> Women's</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="Mens"
                value="Mens"
                checked={selectedSections.includes("Mens")}
                onChange={() => handleSectionToggle("Mens")}
              />
              <label> Men's</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="Kids"
                value="Kids"
                checked={selectedSections.includes("Kids")}
                onChange={() => handleSectionToggle("Kids")}
              />
              <label> Kid's</label>
            </div>
          </div>
          <hr />
          {/*--------------------------------- Sort By Categories----------------------------------------- */}
          <div className="filter-by-categories">
            <span className="filter-heading">CATEGORIES</span>
            <div>
              <input
                type="checkbox"
                name="activeWear"
                value="activeWear"
                checked={selectedCategory.includes("Active Wear")}
                onChange={() => handleCategoryFilter("Active Wear")}
              />
              <label>Active Wear</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="dresses"
                value="dresses"
                checked={selectedCategory.includes("Dresses")}
                onChange={() => handleCategoryFilter("Dresses")}
              />
              <label>Dresses</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="tops"
                value="tops"
                checked={selectedCategory.includes("Tops")}
                onChange={() => handleCategoryFilter("Tops")}
              />
              <label>Tops</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="officeWear"
                value="officeWear"
                checked={selectedCategory.includes("Office Wear")}
                onChange={() => handleCategoryFilter("Office Wear")}
              />
              <label>Office Wear</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="casual"
                value="casual"
                checked={selectedCategory.includes("Casual")}
                onChange={() => handleCategoryFilter("Casual")}
              />
              <label>Casual</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="freestyle"
                value="freestyle"
                checked={selectedCategory.includes("Freestyle")}
                onChange={() => handleCategoryFilter("Freestyle")}
              />
              <label>Freestyle</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="formal"
                value="formal"
                checked={selectedCategory.includes("Formal")}
                onChange={() => handleCategoryFilter("Formal")}
              />
              <label>Men's Formal</label>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------------- Mobile view filters----------------------------------------- */}

      <div class="mobile-filters">
        <div
          class="mobile-filter-header"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <img
            className="svg-icon"
            src="https://static-00.iconduck.com/assets.00/filter-icon-512x430-exhzryxa.png"
            alt=""
          />
          FILTERS
        </div>
        <div>
          <img
            className="svg-icon"
            src="https://static-00.iconduck.com/assets.00/edit-clear-all-symbolic-icon-256x256-ivqmmjo2.png"
            alt=""
          />
          <span
            className="filter-clear-button"
            onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
          >
            CLEAR
          </span>
        </div>
      </div>
    </>
  );
};

export { FiltersSidebar };
