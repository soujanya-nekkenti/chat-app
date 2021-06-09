import React from "react";
import styled from "styled-components";

import onlineIcon from "../icons/onlineIcon.png";
import closeIcon from "../icons/closeIcon.png";

const InfoBar = ({ room }) => (
  <InfoBarContainer>
    <LeftInnerContainer>
      <OnlineIcon src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </LeftInnerContainer>
    <RightInnerContainer>
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </RightInnerContainer>
  </InfoBarContainer>
);

export default InfoBar;

export const InfoBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;

export const LeftInnerContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
`;

export const RightInnerContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`;

export const OnlineIcon = styled.img`
  margin-right: 5%;
`;
