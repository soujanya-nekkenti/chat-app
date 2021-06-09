import React from "react";
import styled from "styled-components";

import onlineIcon from "../icons/onlineIcon.png";

const TextContainer = ({ users }) => (
  <TextWrapper>
    <div>
      <h1>
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <ActiveContainer>
          <h2>
            {users.map(({ name }) => (
              <ActiveItem key={name}>
                {name}
                <img alt="Online Icon" src={onlineIcon} />
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
  }
`;

export const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;
`;

export const ActiveItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;

  img {
    padding-left: 10px;
  }
`;
