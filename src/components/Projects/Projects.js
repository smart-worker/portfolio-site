import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import "./Projects.scss";

function Projects() {
  return (
    <Container fluid className="project-section">
      <div className="project-section-bg" />
      <Container>
        <h1 className="project-heading">Personal Projects</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              title="lorem ipsum dolor sit amet"
              desc="lorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consecteturlorem ipsum dolor sit amet, consectetur"
              link="https://github.com/soumyajit4419/Chatify"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
