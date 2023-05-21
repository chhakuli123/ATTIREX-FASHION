import React from "react";

import "./productcard.css";
import {
  AddShoppingCartRoundedIcon,
  FavoriteBorderOutlinedIcon,
  StarRoundedIcon,
} from "assets";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "context";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "utils";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const navigate = useNavigate();
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

  const isFavorite =
    wishlist && wishlist.find((wishlistProduct) => wishlistProduct._id === _id);

  const toggleWishlist = () => {
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
  return (
    <div>
      <div className="product-card" key={_id}>
        <img
          src={image}
          alt={name}
          onClick={() => navigate(`/productDetails/${_id}`)}
        />
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
