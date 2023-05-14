import React from "react";
import { useNavigate } from "react-router-dom";

import {
  SearchIcon,
  PersonOutlineOutlinedIcon,
  FavoriteBorderOutlinedIcon,
  ShoppingBagOutlinedIcon
} from "assets";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <span className="nav-logo" onClick={() => navigate("/")}>
            AttireX
          </span>
        </div>
        <div className="nav-right">
          <form className="nav-search-form">
            <input type="text" placeholder="Search for items" />
            <button type="submit">
              <SearchIcon className="nav-icon" />
            </button>
          </form>

          <div className="nav-icons-container">
            <span className="nav-icons" onClick={() => navigate("/signinpage")}>
              <PersonOutlineOutlinedIcon className="nav-icon" />
            </span>
            <span
              className="nav-icons"
              onClick={() => navigate("/whishlistpage")}
            >
              <FavoriteBorderOutlinedIcon className="nav-icon" />
            </span>
            <span
              className="nav-icons nav-icon-large"
              onClick={() => navigate("/cartpage")}
            >
              <ShoppingBagOutlinedIcon className="nav-icon" />
            </span>
          </div>
        </div>
      </div>
      <div className="mobile-search-form">
        <input type="text" placeholder="Search for items" />
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
