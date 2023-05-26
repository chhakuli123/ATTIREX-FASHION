import React from "react";
import { ErrorOutlineOutlinedIcon, RemoveRedEyeOutlinedIcon, VisibilityOffOutlinedIcon } from "assets";

const InputField = ({ id, label, type, value, onChange,  onFocus,
  error, toggleHide, hidePassword }) => {
  return (
    <div className="form__group">
      <label htmlFor={id} className="form__label">
        {label}
      </label>
      <div className="password-input">
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={onFocus} 

          className="form__input"
        />
        {toggleHide && (
          <span
            className={`password-toggle ${hidePassword ? "show" : "hide"}`}
            onClick={toggleHide}
          >
            {hidePassword ? (
              <VisibilityOffOutlinedIcon/>
            ) : (
              <RemoveRedEyeOutlinedIcon/>
            )}
          </span>
        )}
      </div>
      {error && (
        <div className="input-error-msg">
          <ErrorOutlineOutlinedIcon className="error-icon" />
          {error}
        </div>
      )}
    </div>
  );
};

export {InputField};
