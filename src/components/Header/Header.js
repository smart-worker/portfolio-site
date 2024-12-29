import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineLaptop,
  AiOutlineBook,
} from "react-icons/ai";

import "./Header.scss";

function NavBar({
  homeRef = null,
  workRef = null,
  eduRef = null,
  projectRef = null,
}) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="m-auto"
            style={{ gap: "1rem" }}
            defaultActiveKey="#home"
          >
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  updateExpanded(false);
                  homeRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  updateExpanded(false);
                  workRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <AiOutlineLaptop style={{ marginBottom: "2px" }} /> Work
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  updateExpanded(false);
                  eduRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <AiOutlineBook style={{ marginBottom: "2px" }} /> Education
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  updateExpanded(false);
                  projectRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
