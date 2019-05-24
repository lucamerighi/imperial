import React from "react";

import { NavBar } from "./components/NavBar";
import { Body } from "./components/body/Body";
import { Footer } from "./components/Footer";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
