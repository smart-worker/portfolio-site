import React from "react";
import { Container, Row } from "react-bootstrap";
import { AiFillGithub, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { LINKEDIN_URL, GITHUB_URL } from "../../constants";

import "./Footer.scss";

function Footer({ homeRef = null }) {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <section className="content-wrapper">
        <Row className="links-wrapper">
          <p
            onClick={() =>
              homeRef?.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <AiOutlineHome />
            &nbsp;&nbsp;Home
          </p>
          <p>
            <AiOutlineMail />
            &nbsp;&nbsp;Contact
          </p>
        </Row>
        <Row className="socials-wrapper">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </Row>
        <Row>
          <p className="copyright-text">
            © {year} Soham Sarkar. All rights reserved.
          </p>
        </Row>
      </section>
    </Container>
  );
}

export default Footer;
