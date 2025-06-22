import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { ECOM_BACK_LINK, ECOM_FRONT_LINK } from "../../constants";

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
              imgPath="ecom"
              title="Ecommerce Comparator"
              desc="Developed a RESTful API using Flask to integrate data scraping from Amazon and Flipkart using Selenium and BeautifulSoup, enabling efficient retrieval of product details and comparative analysis. Designed an interactive frontend with React.js to display search results and provide real-time statistical comparisons between e-commerce platforms, enhancing user experience with intuitive visualizations."
              // frontendLink={ECOM_FRONT_LINK}
              // backendLink={ECOM_BACK_LINK}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="task_manager"
              title="LAN Task Manager"
              desc="This project is a full-stack real-time task manager leveraging a custom C++ key-value storage engine, Node.js backend, and React frontend. It features WebSocket-based live updates, Redis-compatible Pub/Sub implemented in C++, and secure encrypted task storage. The backend broadcasts database changes to clients, enabling seamless multi-device synchronization over LAN."
              // frontendLink={ECOM_FRONT_LINK}
              // backendLink={ECOM_BACK_LINK}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
