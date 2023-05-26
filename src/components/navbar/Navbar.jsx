import React from "react";
import { useNavigate } from "react-router-dom";

import {
  SearchIcon,
  PersonOutlineOutlinedIcon,
  FavoriteBorderOutlinedIcon,
  ShoppingBagOutlinedIcon,
} from "assets";
import "./navbar.css";
import { useAuth, useCart, useFilter, useWishlist } from "context";
import { SEARCH_PRODUCTS } from "utils";

const Navbar = () => {
  const navigate = useNavigate();
  const { dispatch } = useFilter();
  const { wishlistState } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState } = useCart();
  const { cart } = cartState;
  const { isLoggedIn } = useAuth(); 

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value;
    dispatch({ type: SEARCH_PRODUCTS, payload: searchValue });
    navigate("/products");
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <span className="nav-logo" onClick={() => navigate("/")}>
            AttireX
          </span>
          <ul className="nav-menu">
            <li>
              <span className="nav-home-btn" onClick={() => navigate("/")}>
                Home
              </span>
            </li>
            <li>
              <span
                className="nav-buy-now"
                onClick={() => navigate("/products")}
              >
                Buy Now
              </span>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <form className="nav-search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Search for items"
              onChange={handleSearch}
            />
            <SearchIcon className="nav-icon" />
          </form>
          <div className="nav-icons-container">
            <span className="nav-icons" onClick={() => navigate("/profile")}>
              <PersonOutlineOutlinedIcon className="nav-icon" />
            </span>
            <span className="nav-icons" onClick={() => navigate("/wishlist")}>
              <FavoriteBorderOutlinedIcon className="nav-icon" />
              {wishlist.length > 0 && isLoggedIn && (
                <span className="badge-wishlist">{wishlist.length}</span>
              )}
            </span>
            <span
              className="nav-icons nav-icon-large"
              onClick={() => navigate("/cart")}
            >
              <ShoppingBagOutlinedIcon className="nav-icon" />
              {cart.length > 0 && isLoggedIn &&(
                <span className="badge-cart">{cart.length}</span>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="mobile-search-form">
        <input
          type="text"
          placeholder="Search for items"
          onChange={handleSearch}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
