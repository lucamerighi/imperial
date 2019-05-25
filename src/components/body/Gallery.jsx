import React from "react";
import styled, { media } from "../../utils/ThemedComponent";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-row-gap: ${props => (props.primary ? "1rem" : "0")};
  padding: 1rem;
  box-sizing: border-box;
  grid-template-columns: ${props =>
    props.primary ? "1fr 1fr" : "1fr 1fr 1fr"};
  grid-column-gap: ${props => (props.primary ? "2rem" : "3rem")};

  ${media.phone`
    grid-template-columns: 1fr;
  `}
`;

export function Gallery(props) {
  return <Container {...props} />;
}
