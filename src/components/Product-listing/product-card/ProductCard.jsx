import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from  "react-hot-toast";

import { useAuth, useCart, useWishlist } from "context";
import {
  AddShoppingCartRoundedIcon,
  FavoriteBorderOutlinedIcon,
  FavoriteIcon,
  ShoppingCartCheckoutIcon,
  StarRoundedIcon,
} from "assets";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "utils";
import "./productcard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const { isLoggedIn } = useAuth(); 

  const {
    _id,
    name,
    rating,
    price,
    originalPrice,
    isTrending,
    description,
    image,
  } = product;

  //--------------For Wishlist----------------------//

  // Check if the product is in the wishlist
  const isFavorite =
    wishlist && wishlist.find((wishlistProduct) => wishlistProduct._id === _id);

  const toggleWishlist = (e) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    const actionType = isFavorite ? REMOVE_FROM_WISHLIST : ADD_TO_WISHLIST;
    const payload = isFavorite ? _id : product;

    wishlistDispatch({
      type: actionType,
      payload,
    });

    const toastMessage = isFavorite
      ? "Removed from wishlist"
      : "Added to wishlist";
    toast.success(toastMessage);
  };

  //--------------For Cart----------------------//

  // Check if the product is in the cart
  const isAddedToCart =
    cart && cart.find((cartProduct) => cartProduct._id === _id);

  const toggleCart = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    const actionType = isAddedToCart ? REMOVE_FROM_CART : ADD_TO_CART;
    const payload = isAddedToCart ? _id : product;

    cartDispatch({
      type: actionType,
      payload,
    });

    const toastMessage = isAddedToCart ? "Removed from cart" : "Added to cart";
    toast.success(toastMessage);
  };

  return (
    <div>
      <div
        className="product-card"
        key={_id}
        onClick={() => navigate(`/productDetails/${_id}`)}
      >
        <img src={image} alt={name} />
        {isTrending && <span className="card-badge">Trending</span>}
        <span
          className={`whishlist-heart ${isFavorite ? "favorite" : ""}`}
          onClick={toggleWishlist}
        >
          {isFavorite ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
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
          <div className="product-card-price">
            <p className="product-card-price">₹{price}</p>
            <p className="product-original-price">₹{originalPrice}</p>
          </div>
          <div className="product-card-actions">
            {isAddedToCart ? (
              <span
                className="add-to-cart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/cart");
                }}
              >
                <ShoppingCartCheckoutIcon className="icon" /> Go To Cart
              </span>
            ) : (
              <span className="add-to-cart-btn" onClick={toggleCart}>
                <AddShoppingCartRoundedIcon className="icon" /> Add To Cart
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
