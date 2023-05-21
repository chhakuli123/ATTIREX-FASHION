import {
  ShoppingCartCheckoutIcon,
  DeleteOutlinedIcon,
  AddShoppingCartRoundedIcon,
} from "assets";
import { useWishlist } from "context";
import React from "react";

import "./wishlist.css";
import { useNavigate } from "react-router-dom";
import { REMOVE_FROM_WISHLIST } from "utils";
import { toast } from "react-toastify";
const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  return (
    <div className="middle-content">
      <div className="whislist-container">
        <h2 className="wishlist-title">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <div className="wishlist-empty-image">
            <img
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1684491458/E-comm%20ATTIREX/Empty/empty-wishlist_vahejo.webp"
              alt=""
            />
            <button
              className="whishlist-moveto-products"
              onClick={() => navigate("/products")}
            >
              <AddShoppingCartRoundedIcon className="icon" />
              Add Some Products
            </button>
          </div>
        ) : (
          <div className="wishlist-items">
            {wishlist.map(
              (product) =>
                product && (
                  <div key={product._id} className="wishlist-item">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="wishlist-product-image"
                    />
                    <div className="wishlist-item-details">
                      <h3 className="wishlist-product-name">{product.name}</h3>
                      <h3 className="wishlist-product-description">
                        {product.description}
                      </h3>
                      <div className="wishlist-price">
                        <p className="wishlist-product-card-price">
                          ₹{product.price}
                        </p>
                        <p className="wishlist-product-original-price">
                          ₹{product.originalPrice}
                        </p>
                      </div>
                      <div className="wishlist-card-actions">
                        <button className="wishlist-move-to-cart-btn">
                          <ShoppingCartCheckoutIcon className="icon" /> Move to
                          Cart
                        </button>
                      </div>
                      <button
                        className="wishlist-delete-icon"
                        onClick={() => {
                          wishlistDispatch({
                            type: REMOVE_FROM_WISHLIST,
                            payload: product._id,
                          });
                          toast.success('Item removed from wishlist');
                        }}
                      >
                        <DeleteOutlinedIcon className="delete-icon"/>
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { Wishlist };
