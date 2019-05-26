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

const Logo = styled(MenuIcon)`
  width: 6.625rem;
  height: 1.4375rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export function NavBar() {
  return (
    <Container>
      <MenuIcon src="https://img.icons8.com/metro/26/000000/menu.png" />
      <Logo src="https://www.imperialfashion.com/static/frontend/Imperial/Imperial/it_IT/imperial/svg/logo.svg" />
    </Container>
  );
}
