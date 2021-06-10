import React from "react";
import styled from "styled-components";

import onlineIcon from "../icons/onlineIcon.png";

const TextContainer = ({ users }) => (
  <TextWrapper>
    {users ? (
      <div>
        <h1>Online Users:</h1>
        <ActiveContainer>
          <h2>
            {users.map(({ name }) => (
              <ActiveItem key={name}>   
                <img alt="Online Icon" src={onlineIcon} />
                {name}
              </ActiveItem>
            ))}
          </h2>
        </ActiveContainer>
      </div>
    ) : null}
  </TextWrapper>
);

export default TextContainer;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  color: white;
  height: 60%;
  justify-content: space-between;

  h1 {
    margin-bottom: 0px;
    @media (min-width: 320px) and (max-width: 480px) {
    font-size:24px;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: 2px;
  }
`;

export const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;
  text-transform: capitalize;
  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 2%;
  }
`;

export const ActiveItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;

  img {
    padding-right: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size:14px;
    }
`;
