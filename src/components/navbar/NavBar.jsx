import React from "react";
import styled from "styled-components";
import { NavIcon, Logo } from "./NavIcon";

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
  // padding: 0 1rem;
`;

const IconList = styled.ul`
  list-style: none;
  margin-left: ${props => (props.right ? "auto" : 0)};
`;

export function NavBar() {
  return (
    <Container>
      <NavIcon src="https://img.icons8.com/metro/26/000000/menu.png" />
      <Logo src="https://www.imperialfashion.com/static/frontend/Imperial/Imperial/it_IT/imperial/svg/logo.svg" />

      <IconList right>
        <NavIcon src="https://img.icons8.com/ios/50/000000/search.png" />
        <NavIcon src="https://img.icons8.com/ios/50/000000/like.png" />
        <NavIcon src="https://img.icons8.com/windows/32/000000/shopping-bag.png" />
      </IconList>
    </Container>
  );
}