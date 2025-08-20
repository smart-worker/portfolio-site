import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
// import { ECOM_BACK_LINK, ECOM_FRONT_LINK } from "../../constants";

import "./Projects.scss";

function Projects() {
  return (
    <Container fluid className="project-section">
      <div className="project-section-bg" />
      <Container>
        <h1 className="project-heading">Personal Projects</h1>
        <Row className="custom-row">
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="ecom"
              title="Multi-modal Search Engine"
              desc="Developed a scalable Multi-Modal AI Search Engine enabling cross-modal retrieval among images, audio, and text using state-of-the-art embeddings (CLIP for images/text and CLAP for audio). Implemented real-time indexing and search with FAISS vector database, facilitating dynamic addition of multimedia content via a user-friendly web interface. Ensured semantic alignment of heterogeneous data modalities by leveraging embedding normalization and advanced deep learning models for enhanced search accuracy. Designed and deployed robust backend APIs and frontend UI integrating AI models, enabling low-latency, high-accuracy multimodal search capabilities suitable for production environments"
              // frontendLink={ECOM_FRONT_LINK}
              // backendLink={ECOM_BACK_LINK}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="ecom"
              title="Portfolio Chatbot"
              desc="Developed an AI-powered portfolio assistant using RAG (Retrieval-Augmented Generation) architecture with Flask backend, integrating SentenceTransformers for semantic embeddings, FAISS vector database for similarity search, and Groq LLM API to deliver contextually accurate responses about projects and experience. Built end-to-end conversational AI system processing natural language queries against custom knowledge base of 12 portfolio documents, implementing semantic search with vector embeddings to retrieve relevant context and generate personalized responses using large language models. Created production-ready React.js chatbot interface with responsive mobile design featuring real-time chat functionality, typing indicators, message history management, and professional Intercom-style UI components with seamless API integration. Engineered intelligent RAG pipeline with automated document processing, vector embedding generation, and context-aware response system, successfully deploying full-stack application on cloud platform with RESTful APIs and CORS-enabled frontend integration"
              // frontendLink={ECOM_FRONT_LINK}
              // backendLink={ECOM_BACK_LINK}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="ecom"
              title="ERP dashboard"
              desc="lorem"
              // frontendLink={ECOM_FRONT_LINK}
              // backendLink={ECOM_BACK_LINK}
            />
          </Col>
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
