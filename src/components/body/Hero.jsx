import React from "react";
import styled, { media } from "../../utils/ThemedComponent";

import { Button } from "../Buttons/Button";

const mobileImg =
  "https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP-2MOBILE.jpg";
const largeImg =
  "https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP-2_14.jpg";

const Container = styled.div`
  width: 100%;
  margin-top: 5vh;
  position: relative;
`;

const DesktopImage = styled.img`
  width: 100%;
  max-height: auto;
  display: none;

  ${media.desktop`
    display: block;
  `}
`;

const MobileImage = styled.img`
  width: 100%;
  max-height: auto;

  ${media.desktop`
    display: none;
  `}
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 1rem 5rem;
  line-height: 1.5rem;
  font-weight: 600;
  opacity: 0.8;
`;

export function Hero() {
  return (
    <Container>
      <DesktopImage src={largeImg} alt="" />
      <MobileImage src={mobileImg} alt="" />
      <StyledButton>Scopri la campagna</StyledButton>
    </Container>
  );
}
