import React from "react";
import styled from "styled-components";
import { Hero } from "./Hero";
import { Gallery } from "./Gallery";
import { Newsletter } from "./Newsletter";
import { Card } from "../Card";

const Container = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  box-sizing: border-box;
`;

export function Body() {
  return (
    <Container>
      <Hero />
      <Gallery primary>
        <Card
          imageUrl="https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP_2.jpg"
          buttonText="Scopri di più"
          center
        />
        <Card
          imageUrl="https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP-1_17.jpg"
          buttonText="Scopri di più"
          center
        />
      </Gallery>
      <Gallery>
        <Card
          imageUrl="https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP-2_15.jpg"
          buttonText="Scopri di più"
        />
        <Card
          imageUrl="https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP-2_12.jpg"
          buttonText="Scopri di più"
        />
        <Card
          imageUrl="https://www.imperialfashion.com/media/wysiwyg/IMPERIAL_SS19/Homepage/Imperial_HP-5_1.jpg"
          buttonText="Scopri di più"
        />
      </Gallery>
      <Newsletter />
    </Container>
  );
}
