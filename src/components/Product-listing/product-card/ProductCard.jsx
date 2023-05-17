import React from "react";

import "./productcard.css";
import {
  AddShoppingCartRoundedIcon,
  FavoriteBorderOutlinedIcon,
  StarRoundedIcon,
} from "assets";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    rating,
    price,
    originalPrice,
    isOutOfStock,
    description,
    image,
  } = product;
  return (
    <div>
      <div className="product-card" key={_id}>
        <img src={image} alt={name} />
        {isOutOfStock && <span className="card-badge">Out of stock</span>}
        <span className="whishlist-heart">
          <FavoriteBorderOutlinedIcon />
        </span>
        <div className="product-card-info">
          <div className="product-card-header">
            <h3 className="product-card-title" title={name}>
              {name}
            </h3>
            <div className="product-card-star">
              <p>{rating}</p>
              <StarRoundedIcon className="star-icon" />
            </div>
          </div>
          <h3 className="product-card-description">{description}</h3>
          <div className="price">
            <p className="product-card-price">₹{price}</p>
            <p className="product-original-price">₹{originalPrice}</p>
          </div>
          <div className="product-card-actions">
            <button className="add-to-cart-btn">
              <AddShoppingCartRoundedIcon className="icon" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
