import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context";
import "./userprofile.css";

function UserProfile() {
  const { logoutHandler, currentUser } = useAuth();

  return (
    <div className="profile-page">
      <div className="profile-container">
      <h2 className="profile-heading">User Profile</h2>
        <div className="avatar-container">
          <img className="avatar-image" src="https://res.cloudinary.com/dptfwcnro/image/upload/v1685077996/E-comm%20ATTIREX/avtar/pngtree-beard-family-girl-playing-avatar-image_1138008_f8w31f.jpg" alt="Avatar" /> 
          {currentUser && <div className="status-dot"/>} 
        </div>
      
        <div className="profile-details">
          <h3>Full Name: {currentUser?.firstName}</h3>
          <h3>Email: {currentUser?.email}</h3>
        </div>

        <div className="profile-actions">
          {currentUser ? (
            <button className="logout-btn" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <Link className="login-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export { UserProfile };
