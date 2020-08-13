import React from "react";
import styled, { css } from "styled-components";

const StyledIcon = styled.i``;

const InfoItem = (props) => {
  return (
    <section class="animated section-notif section-notif-success">
      <div className="notif-icon">{props.children}</div>
      <div className="notif-content">
        <span className="notif-title">{props.title}</span>
        <br />
        <span className="notif-msg">{props.content}</span>
      </div>
    </section>
  );
};

export default InfoItem;
