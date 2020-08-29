import React from "react";
import "./Button.scss";



export const Button = ({ children }) => {
  return (
    <button className={`btn btn--primary btn--medium`} onClick={onclick}>
      {children}
    </button>
  );
};
