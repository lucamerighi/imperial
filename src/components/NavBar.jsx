import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5vh;
  background-color: red;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
`;

export function NavBar() {
  return <Container />;
}
