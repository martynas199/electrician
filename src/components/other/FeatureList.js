import React from "react";
import './FeaturesList.scss'



export const FeaturesList = ({
  children
}) => {
 
  return (
    <div>
      <ul>
        <li>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="chckbox-icon"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <p  className="feature-list">{children}</p>

        </li>
      </ul>
    </div>
  );
};
