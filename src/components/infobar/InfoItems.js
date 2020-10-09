import React from "react";

const InfoItem = (props) => {
  return (
    <section class="info-content section-notif-success">
      <div className="notif-icon">{props.children}</div>
      <div className="notif-content">
        <span className="notif-title">{props.title}</span>
        <span className="notif-msg">{props.content}</span>
      </div>
    </section>
  );
};

export default InfoItem;
