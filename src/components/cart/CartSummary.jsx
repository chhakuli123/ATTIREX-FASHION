import React from 'react';
import {SellOutlinedIcon} from 'assets';

const CartSummary = ({ cart, quantity, setShowCouponModal, isCouponApplied, coupon }) => {
  // Calculate the total price with discount and coupon
  const totalPrice = cart.reduce((total, product) => total + product.price * quantity, 0) - 500 - (isCouponApplied ? coupon : 0);

  // Calculate the discount based on the quantity
  const discountedPrice = 500 + (quantity - 1) * 500;

  return (
    <div className="cart-summary">
      <div className="cart-summary-right">
        <div className="coupon-container">
          <button className="coupon-apply-btn" onClick={() => setShowCouponModal(true)}>
            <span className="apply-coupon-icon">
              <SellOutlinedIcon />
            </span>
            Apply Coupon
          </button>
        </div>
        <div className="price-details">
          <p className="price-detail-row">
            <span>Price Details:</span> <span>({cart.length} items)</span>
          </p>
          <p className="price-detail-row">
            <span>Total MRP:</span>
            <span>
              ₹
              {cart.reduce((total, product) => total + product.price * quantity, 0)}
            </span>
          </p>
          <p className="price-detail-row">
            <span>Discount:</span> <span>- ₹{discountedPrice}</span>
          </p>

          {isCouponApplied && (
            <p className="price-detail-row">
              <span>Applied Coupon:</span>
              <span>₹{coupon}</span>
            </p>
          )}

          <p className="price-detail-row">
            <span>Delivery Charges:</span>
            <span className="delivery-charges">Free</span>
          </p>
          <hr />
          <p className="price-detail-row total-amount">
            <span>Total Amount:</span> <span>₹{totalPrice}</span>
          </p>
        </div>
        <hr />
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export { CartSummary };
