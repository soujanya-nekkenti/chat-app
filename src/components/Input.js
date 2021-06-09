import React from "react";
import styled from "styled-components";

const Input = ({ setMessage, sendMessage, message }) => (
  <Form>
    <InputBox
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <Button onClick={(event) => sendMessage(event)}>Send</Button>
  </Form>
);

export default Input;

export const Form = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

export const InputBox = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;
