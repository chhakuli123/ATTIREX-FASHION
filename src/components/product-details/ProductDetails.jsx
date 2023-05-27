import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  CheckCircleIcon,
  LocalOfferIcon,
  LocalShippingIcon,
  StarRoundedIcon,
} from "assets";
import {
  useAuth,
  useCart,
  useProductsData,
  useWishlist,
} from "context";
import { ADD_TO_CART } from "utils";
import { toast } from "react-hot-toast";
import "./productdetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  const { productsData } = useProductsData();
  const { wishlistState, addToWishlistHandler } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;

  const product = productsData?.find((product) => {
    return product._id === productId;
  });

  const isFavorite = wishlist && wishlist.find((wishlistProduct) => wishlistProduct._id === product._id);
  const isAddedToCart = cart && cart.find((cartProduct) => cartProduct._id === product._id);

  const handleAddToWishlist = () => {
    if (isLoggedIn) {
      addToWishlistHandler(product);
      toast.success(`${product.name} added to wishlist`);
    } else {
      navigate("/login");
    }
  };

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
              {isAddedToCart ? (
                <span onClick={() => navigate("/cart")}>Go To Cart</span>
              ) : (
                <span
                  onClick={() => {
                    cartDispatch({
                      type: ADD_TO_CART,
                      payload: product,
                    });
                    toast.success("Added to cart");
                  }}
                >
                  Add To Cart
                </span>
              )}
            </button>
            {isFavorite ? (
              <button className="product-detail-add-to-whishlist-btn" onClick={() => navigate("/wishlist")}>
                Go To Wishlist
              </button>
            ) : (
              <button className="product-detail-add-to-whishlist-btn" onClick={handleAddToWishlist}>
                Add To Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductDetails };
