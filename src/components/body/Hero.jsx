import React from "react";
import styled from "../../utils/ThemedComponent";

import { Button } from "../Buttons/Button";

const Container = styled.div`
  width: 100%;
  margin-top: 5vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  max-height: auto;
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
      <Image
        src="https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP-2MOBILE.jpg"
        // srcSet="https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP-2MOBILE.jpg 300w,
        // https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP-2_14.jpg 1920w"
        alt=""
      />
      <StyledButton>Scopri la campagna</StyledButton>
    </Container>
  );
}
