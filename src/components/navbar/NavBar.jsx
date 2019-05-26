import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const MenuIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export function NavBar() {
  return (
    <Container>
      <MenuIcon src="https://img.icons8.com/metro/26/000000/menu.png" />
    </Container>
  );
}
