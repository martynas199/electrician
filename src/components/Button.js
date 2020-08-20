import React from "react";
import "./Button.scss";

const STYLES = ["btn--primary"];

const SIZES = ["btn--medium"];

export const Button = ({ children }) => {
  return (
    <button className={`btn btn--primary btn--medium`} onClick={onclick}>
      {children}
    </button>
  );
};
