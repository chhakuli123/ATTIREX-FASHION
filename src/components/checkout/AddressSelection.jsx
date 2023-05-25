import React from "react";

const AddressSelection = ({
  addresses,
  selectedAddress,
  handleAddressChange,
}) => {
  return (
    <div className="address-container">
      <h2 className="select-address">Select Address</h2>
      <div className="address-radio-group">
        {addresses.map((address) => (
          <div className="address-radio-item" key={address.id}>
            <label
              htmlFor={`address-${address.id}`}
              className={selectedAddress.id === address.id ? "selected" : ""}
            >
              <input
                type="radio"
                id={`address-${address.id}`}
                name="address"
                value={address.id}
                checked={selectedAddress.id === address.id}
                onChange={handleAddressChange}
              />
              <h3 className="recipient-name">{address.name}</h3>
            </label>
            <div className="address-info ">
              <span className="address-details">{address.address}</span>
              <span className="phone-number">
                Phone Number: {address.phoneNumber}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { AddressSelection };
