import React from "react";
import { useNavigate } from "react-router-dom";

import "./error.css";
const Error = () => {
  const navigate = useNavigate();
  
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="error-container">
      <div className="image-container">
        <img
          src="https://res.cloudinary.com/dptfwcnro/image/upload/v1685254407/E-comm%20ATTIREX/undraw_page_not_found_re_e9o6_q7vip9.svg"
          alt="errorImage"
        />
      </div>
      <button className="back-btn" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export {Error};
