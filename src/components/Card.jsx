import React from "react";
import styled, { media } from "../utils/ThemedComponent";

import { Button } from "./buttons/Button";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  max-height: auto;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: ${props => (props.center ? "50%" : "12%")};
  left: 50%;
  transform: translate(-50%, +50%);
  padding: 1rem 4rem;
  line-height: 1.5rem;
  font-weight: 600;
  width: 90%;

  ${media.desktop`
    width: 50%;
  `}
`;

// const CardFooter = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-transform: uppercase;
// `;

export function Card(props) {
  return (
    <Container>
      <Image src={props.imageUrl} alt="" />
      <StyledButton center={props.center}> {props.buttonText}</StyledButton>
    </Container>
  );
}
