import "./App.css";

import React from "react";

import { Container, MantineThemeContext } from "@mantine/core";
import { Testimonials } from "./components/Testimonials.jsx";

function App() {
  return (
    <MantineThemeContext>
      <Container m="xl">
        <Testimonials />
      </Container>
    </MantineThemeContext>
  );
}

export default App;
