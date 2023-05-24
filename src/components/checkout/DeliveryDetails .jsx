import React from "react";

const DeliveryDetails = ({ selectedAddress }) => {
  return (
    <>
      <h3 className="section-title">Deliver To</h3>
      <div className="delivery-container">
        <div className="deliver-to">
          <p>
            <span className="recipient-name">{selectedAddress.name}</span>
            <br />
            {selectedAddress.address} <br />
            <p className="phone-number">
              Phone Number: {selectedAddress.phoneNumber}
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export { DeliveryDetails };
