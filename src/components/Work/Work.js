import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import {
  STUNNER_LOR,
  HACKNPITCH_LOR,
  CREDANIC_LOR,
  TECHTRIX_LOR,
} from "../../constants";

import "./Work.scss";

function Work() {
  return (
    <Container fluid className="work-wrapper">
      <div className="work-section-bg" />
      <section className="work-content-wrapper">
        <h2>Work & Contributions</h2>
        <div className="work-experience-list">
          <div
            className="work-item-container"
            onClick={() => window.open(STUNNER_LOR)}
            title="Click to visit link"
          >
            <h5>Software Development Engineer</h5>
            <h6>Stunner Technologies Pvt. Ltd. - Remote</h6>
            <h6>Feb 2022 - Jul 2024</h6>
            <ul>
              <li>
                Developed and maintained scalable, responsive web applications
                using React.js, Next.js, modern JavaScript (ES6+) as well as
                Typescript.
              </li>
              <li>
                Integrated APIs and managed state using Redux, Context API, or
                other state management tools.
              </li>
              <li>
                Collaborated with UI/UX designers to translate wireframes and
                mockups into interactive user interfaces.
              </li>
              <li>
                Ensured cross-browser compatibility and optimized web
                applications for performance and scalability.
              </li>
              <li>
                Used Git for version control and collaborated on projects in an
                Agile/Scrum environment.
              </li>
              <li>
                Implemented unit and integration testing to ensure code quality
                and reduce defects.
              </li>
            </ul>
          </div>
          <div
            className="work-item-container"
            onClick={() => window.open(CREDANIC_LOR)}
            title="Click to visit link"
          >
            <h5>SDE Intern</h5>
            <h6>Credanic Solutions - Remote</h6>
            <h6>Dec 2021 - Feb 2022</h6>
            <ul>
              <li>
                Assisted in developing responsive web applications using
                React.js and modern JavaScript (ES6+)
              </li>
              <li>
                Collaborated with the development team to implement
                user-friendly interfaces based on design specifications.
              </li>
              <li>
                Implemented visually appealing and responsive UIs using
                Bootstrap and Tailwind CSS for styling.
              </li>
              <li>
                Participated in integrating RESTful APIs to fetch and display
                dynamic data.
              </li>
              <li>
                Wrote clean and maintainable code while adhering to best
                practices and coding standards.
              </li>
            </ul>
          </div>
          <div
            className="work-item-container"
            onClick={() => window.open(TECHTRIX_LOR)}
            title="Click to visit link"
          >
            <h5>TECHTRIX 2022</h5>
            <h6>Individual contribution</h6>
            <h6>2022</h6>
            <ul>
              <li>
                Developed mobile applicaiton for Android using React Native.
              </li>
              <li>
                Implemented user authentication to enhance app functionality.
              </li>
              <li>
                Integrated backend services using REST APIs to enable seamless
                communication between app and server.
              </li>
            </ul>
          </div>
          <div
            className="work-item-container"
            onClick={() => window.open(HACKNPITCH_LOR)}
            title="Click to visit link"
          >
            <h5>HacknPitch’21 special mention</h5>
            <h6>Part of Team Quasar</h6>
            <h6>2021</h6>
            <ul>
              <li>
                Developed responsive web-app using frontend framework like
                React.js
              </li>
              <li>
                Designed attraction web desings and implemented using styling
                library like Bootstrap.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Techstack />
    </Container>
  );
}

export default Work;
