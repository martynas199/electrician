import React from "react";
import "./infobar.scss";
import InfoItem from "./InfoItems";


const CommentDetail = () => {
  return (
    <div className="nav-info">
      
      <InfoItem title="OUR LOCATION" content="Peterborough, England">
        <span class="fa-stack">
          <i class="far fa-circle fa-stack-2x"></i>
          <i class="fas fa-map-marker-alt fa-stack-1x"></i>
        </span>
      </InfoItem>
      <InfoItem title="CALL US" content="01722 203380">
        <span class="fa-stack">
          <i class="far fa-circle fa-stack-2x"></i>
          <i class="fas fa-phone-alt fa-stack-1x"></i>
        </span>
      </InfoItem>
      <InfoItem title="MAIL US" content="info@sparky.co.uk">
        <span class="fa-stack">
          <i class="far fa-circle fa-stack-2x"></i>
          <i class="fas fa-envelope fa-stack-1x"></i>
        </span>
      </InfoItem>
    </div>
  );
};

export default CommentDetail;
