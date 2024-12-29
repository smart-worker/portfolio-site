import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-mainv2.svg";
import Type from "./Typing";

import { ReactComponent as Download } from "../../Assets/download.svg";

function HomeSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "soham_sarkar.pdf";
    link.click();
  };

  const handleMailClick = () => {
    window.location.href = "mailto:sarkarsoham07@gmail.com?";
  };

  return (
    <Container fluid className="home-section" id="home">
      <Row className="content-wrapper">
        <Col md={7} className="text-container">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hello World!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'm
            <strong className="main-name"> SOHAM SARKAR</strong>
          </h1>

          <div style={{ textAlign: "left" }}>
            <Type />
          </div>

          <div className="buttons-wrapper">
            <div className="contact-button" onClick={handleMailClick}>
              Get in touch
            </div>
            <div className="resume-button" onClick={handleDownload}>
              Resume&nbsp;&nbsp;
              <Download />
            </div>
          </div>
        </Col>

        <Col md={5} className="image-container">
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid"
            //   style={{ maxHeight: "450px" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeSection;