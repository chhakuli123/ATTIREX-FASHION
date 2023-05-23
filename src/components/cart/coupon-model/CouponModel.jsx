import React, { useState } from "react";

import "./couponmodel.css";
import { CloseIcon } from "assets";

const CouponModal = ({
  showCouponModal,
  handleApplyCoupon,
  closeCouponModal,
  setCoupon,
}) => {
  const [seasonalOffer, setSeasonalOffer] = useState(false);
  const [festiveOffer, setFestiveOffer] = useState(false);

  // Apply coupon and update state
  const handleApply = () => {
    let couponValue = 0;

    if (seasonalOffer) {
      couponValue += 100;
    }
    if (festiveOffer) {
      couponValue += 200;
    }

    setCoupon(couponValue);
    handleApplyCoupon();
  };

  return (
    <>
      {showCouponModal && (
        <div className="coupon-modal">
          <div className="coupon-modal-content">
            <h3>Apply Coupon</h3>
            <div className="checkbox-container">
              <div className="first-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={seasonalOffer}
                    onChange={() => setSeasonalOffer(!seasonalOffer)}
                  />
                  Seasonal Offer
                </label>
                <p>Get a refreshing discount of ₹100 on your orders! Brighten up your shopping.</p>
              </div>
              <div className="second-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={festiveOffer}
                    onChange={() => setFestiveOffer(!festiveOffer)}
                  />
                  Festive Offer
                </label>
                <p>Save ₹200 on orders and make your celebrations even more joyful.</p>
              </div>
            </div>
            <div className="coupon-modal-actions">
              <button onClick={handleApply}>Apply</button>
            </div>
            <button className="close-button" onClick={closeCouponModal}>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { CouponModal };
