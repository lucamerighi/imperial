import styled from "styled-components";

export const Button = styled.button`
  background-color: white;
  color: black;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 90%;

  &:hover {
    background-color: black;
    color: white;
  }
`;
