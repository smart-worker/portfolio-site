import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";

import "./Work.scss";

function Work() {
  return (
    <Container fluid className="work-wrapper">
      <div className="work-section-bg" />
      <section className="work-content-wrapper">
        <h2>Work & Contributions</h2>
        <div className="work-experience-list">
          <div className="work-item-container">
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
          <div className="work-item-container">
            <h5>SDE Intern</h5>
            <h6>Credanic Solutions - Remote</h6>
            <h6>Dec 2021 - Jan 2022</h6>
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
          <div className="work-item-container">
            <h5>TECHTRIX 2022</h5>
            <h6>Individual contribution</h6>
            <h6>2022</h6>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="work-item-container">
            <h5>HacknPitch’21 position holder (Team Quasar)</h5>
          </div>
        </div>
      </section>
      <Techstack />
    </Container>
  );
}

export default Work;
