import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import styled from "styled-components";
import InfoBar from "./InfoBar";
import TextContainer from "./TextContainer";
import Input from "./Input";
import Messages from "./messages/Messages";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

 const ENDPOINT = "https://personal-chat-bot.herokuapp.com/";
 // const ENDPOINT = "http://localhost:8000"; // for local development

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <Wrapper>
    <Header>
      Realtime Chat Application{" "}
      <span role="img" aria-label="emoji">
        💬
      </span>
    </Header>
    <OuterContainer>
      <Container>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Container>
      <TextContainer users={users} />
    </OuterContainer>
    </Wrapper>
  );
};

export default Chat;

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1d;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
    flex-direction: column-reverse;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  span{
    margin-left: 20px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
     display: none;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  height: 60%;
  width: 35%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    width: 60%;
  }
`;
