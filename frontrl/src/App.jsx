import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/Content";
import { Container } from "./styles";
import Navegador from "./components/Navegador";
function App() {
  return (
    <Container>
      <Router>
        <Navegador />
        <Content />
      </Router>
    </Container>
  );
}

export default App;
