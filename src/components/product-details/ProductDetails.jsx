import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import "./productdetails.css";
import {
  AddShoppingCartRoundedIcon,
  CheckCircleIcon,
  FavoriteBorderOutlinedIcon,
  LocalOfferIcon,
  LocalShippingIcon,
  StarRoundedIcon,
} from "assets";
import { useProductsData } from "context";

const ProductDetails = () => {
  const { productId } = useParams();

  const [quantity, setQuantity] = useState(1);
  const { productsData } = useProductsData();

  const product = productsData?.find((product) => {
    return product._id === productId;
  });
  return (
    <>
      <div className="product">
        <div className="left">
          <div className="image">
            <img
              className="single-card-img"
              src={product?.image}
              alt={product?.name}
            />
            {product?.isOutOfStock && (
              <span className="card-badge">Out of stock</span>
            )}
          </div>
        </div>
        <div className="right">
          <div className="product-detail-info-container">
            <h1>{product?.name}</h1>
            <div className="product-detail-rating">
              <p>{product?.rating}</p>
              <StarRoundedIcon className="product-detail-star-icon" />
            </div>
            <div className="price">
              <p className="product-card-price">₹{product?.price}</p>
              <p className="product-detail-original-price">
                ₹{product?.originalPrice}
              </p>
            </div>
          </div>

          <p className="product-detail-description">{product?.description}</p>
          <div className="quantity">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <div className="product-detail-tag-msg">
            <span className="tag-msg">
              <LocalShippingIcon /> Fastest Delivery
            </span>
            <span className="tag-msg">
              <LocalOfferIcon /> Inclusive of All Taxes
            </span>
            <span className="tag-msg">
              <CheckCircleIcon /> Cash On Delivery Available
            </span>
          </div>
          <div className="product-btn-container">
            <button className="product-detail-add-to-cart-btn">
              <AddShoppingCartRoundedIcon className="icon" /> Add to Cart
            </button>
            <button className="product-detail-add-to-whishlist-btn">
              <FavoriteBorderOutlinedIcon className="icon" /> Add to whishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductDetails };
