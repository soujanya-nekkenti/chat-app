import React from "react";
import ReactEmoji from "react-emoji";
import styled from "styled-components";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <MessageContainer>
      <SentText style={{ paddingRight: "10px" }}>{trimmedName}</SentText>
      <MessageBox style={{ background: "#2979FF" }}>
        <MessageText>{ReactEmoji.emojify(text)}</MessageText>
      </MessageBox>
    </MessageContainer>
  ) : (
    <MessageContainer style={{ justifyContent: "flex-start" }}>
      <MessageBox>
        <MessageText style={{ color: "#353535" }}>
          {ReactEmoji.emojify(text)}
        </MessageText>
      </MessageBox>
      <SentText style={{ paddingLeft: "10px" }}>{user}</SentText>
    </MessageContainer>
  );
};

export default Message;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
`;

export const MessageBox = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;

export const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: white;

  img {
    vertical-align: middle;
  }
`;

export const SentText = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
`;
