import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import {
  AddShoppingCartRoundedIcon,
  CheckCircleIcon,
  FavoriteBorderOutlinedIcon,
  FavoriteIcon,
  LocalOfferIcon,
  LocalShippingIcon,
  RemoveShoppingCartOutlinedIcon,
  ShoppingCartCheckoutIcon,
  StarRoundedIcon,
} from "assets";
import { useAuth, useCart, useProductsData, useWishlist } from "context";

import "./productdetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  const { productsData } = useProductsData();
  const { wishlistState, addToWishlistHandler } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartState, addToCartHandler } = useCart();
  const { cart } = cartState;

  const product = productsData?.find((product) => {
    return product._id === productId;
  });

  const isFavorite =
    wishlist &&
    wishlist.find((wishlistProduct) => wishlistProduct._id === product._id);
  const isAddedToCart =
    cart && cart.find((cartProduct) => cartProduct._id === product._id);

  const handleAddToWishlist = () => {
    if (isLoggedIn) {
      addToWishlistHandler(product);
      toast.success(`${product.name} added to wishlist`);
    } else {
      navigate("/login");
    }
  };

  const handleAddToCart = () => {
    if (isLoggedIn) {
      addToCartHandler(product);
      toast.success(`${product.name} added to cart`);
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
            {isAddedToCart ? (
              <button
                className="product-detail-add-to-cart-btn"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCartCheckoutIcon className="icon" />Go To Cart
              </button>
            ) : (
              <button
                className={`product-detail-add-to-cart-btn${
                  product.isOutOfStock ? " add-to-cart-btn outofstock" : ""
                }`}
                onClick={handleAddToCart}
                disabled={product.isOutOfStock}
              >
                {product.isOutOfStock ? (
                  <>
                    <RemoveShoppingCartOutlinedIcon className="icon" /> Out of
                    Stock
                  </>
                ) : (
                  <>
                    <AddShoppingCartRoundedIcon className="icon" /> Add To Cart
                  </>
                )}
              </button>
            )}

            {isFavorite ? (
              <button
                className="product-detail-add-to-whishlist-btn"
                onClick={() => navigate("/wishlist")}
              >
              <FavoriteIcon color="error"/>  Go To Wishlist
              </button>
            ) : (
              <button
                className="product-detail-add-to-whishlist-btn"
                onClick={handleAddToWishlist}
              >
               <FavoriteBorderOutlinedIcon/> Add To Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductDetails };
