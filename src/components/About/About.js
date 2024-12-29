import React from "react";
import { Container, Row } from "react-bootstrap";
import Techstack from "./Techstack";

import "./About.scss";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
