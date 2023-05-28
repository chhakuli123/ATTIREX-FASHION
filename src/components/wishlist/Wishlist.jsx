import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useCart, useWishlist } from "context";
import {
  ShoppingCartCheckoutIcon,
  DeleteOutlinedIcon,
  AddShoppingCartRoundedIcon,
} from "assets";

import "./wishlist.css";

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlistState, removeFromWishlistHandler } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState, addToCartHandler } = useCart();
  const { cart } = cartState;

  const handleMoveToCart = (e, product) => {
    e.stopPropagation();
    addToCartHandler(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromWishlist = (e, product) => {
    e.stopPropagation();
    removeFromWishlistHandler(product._id);
    toast.success(`${product.name} removed from wishlist`);
  };

  return (
    <div className="middle-content">
      <div className="whislist-container">
        <h2 className="wishlist-title">My Wishlist</h2>
        {wishlist.length === 0 ? (
          <div className="wishlist-empty-image">
            <img
              src="https://res.cloudinary.com/dptfwcnro/image/upload/v1684749540/E-comm%20ATTIREX/Empty/undraw_Wishlist_re_m7tv_vk76yk.png"
              alt=""
            />
            <button
              className="whishlist-moveto-products"
              onClick={() => navigate("/products")}
            >
              <AddShoppingCartRoundedIcon className="icon" />
              Add Products
            </button>
          </div>
        ) : (
          <div className="wishlist-items">
            {wishlist.map(
              (product) =>
                product && (
                  <div
                    key={product._id}
                    className="wishlist-item"
                    onClick={() => navigate(`/productDetails/${product._id}`)}
                  >
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
                        {cart.some((item) => item._id === product._id) ? (
                          <button
                            className="wishlist-move-to-cart-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/cart");
                            }}
                          >
                            <ShoppingCartCheckoutIcon className="icon" />
                            Go To Cart
                          </button>
                        ) : (
                          <button
                            className="wishlist-move-to-cart-btn"
                            onClick={(e) => handleMoveToCart(e, product)}
                          >
                            <AddShoppingCartRoundedIcon className="icon" />
                            Add To Cart
                          </button>
                        )}
                      </div>
                      <button
                        className="wishlist-delete-icon"
                        onClick={(e) => handleRemoveFromWishlist(e, product)}
                      >
                        <DeleteOutlinedIcon className="delete-icon" />
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
