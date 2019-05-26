import styled, { media } from "../../utils/ThemedComponent";

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

  ${media.desktop`
    width: 50%;
  `}

  &:hover {
    background-color: black;
    color: white;
  }
`;
