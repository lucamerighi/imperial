import React from "react";
import styled from "../../utils/ThemedComponent";

const Icon = styled.img`
  width: 1.5rem;
  height: auto;
  padding: 0.2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled(Icon)`
  width: 30%;
  height: 70%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export function NavIcon(props) {
  return <Icon src={props.src} />;
}
