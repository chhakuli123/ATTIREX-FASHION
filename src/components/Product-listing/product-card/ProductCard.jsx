import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useAuth, useCart, useWishlist } from "context";
import {
  AddShoppingCartRoundedIcon,
  FavoriteBorderOutlinedIcon,
  FavoriteIcon,
  RemoveShoppingCartOutlinedIcon,
  ShoppingCartCheckoutIcon,
  StarRoundedIcon,
} from "assets";

import "./productcard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    wishlistState,
    removeFromWishlistHandler,
    addToWishlistHandler,
  } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState, addToCartHandler } = useCart();
  const { cart } = cartState;
  const { isLoggedIn } = useAuth();

  const {
    _id,
    name,
    rating,
    price,
    originalPrice,
    isTrending,
    isOutOfStock,
    description,
    image,
  } = product;

  //--------------For Wishlist----------------------//

  // Check if the product is in the wishlist
  const isFavorite =
    isLoggedIn &&
    wishlist &&
    wishlist.find((wishlistProduct) => wishlistProduct._id === _id);

  const toggleWishlist = (e) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (isFavorite) {
      removeFromWishlistHandler(_id);
      toast.success(`${name} removed from wishlist`);
    } else {
      addToWishlistHandler(product);
      toast.success(`${name} added to wishlist`);
    }
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
    addToCartHandler(product);
    toast.success(`${name} added to cart`);
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
              <button
                className="add-to-cart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/cart");
                }}
              >
                <ShoppingCartCheckoutIcon className="icon" /> Go To Cart
              </button>
            ) : (
              <>
                {isOutOfStock ? (
                  <button className="add-to-cart-btn outofstock" disabled>
                    <RemoveShoppingCartOutlinedIcon className="icon" /> Out of
                    Stock
                  </button>
                ) : (
                  <button className="add-to-cart-btn" onClick={toggleCart}>
                    <AddShoppingCartRoundedIcon className="icon" /> Add To Cart
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
