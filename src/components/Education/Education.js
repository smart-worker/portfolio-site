import React from "react";
import { Container } from "react-bootstrap";

import { ReactComponent as EduBg } from "../../Assets/about.svg";

import "./Education.scss";

const academicDetails = [
  {
    degree: "M.Tech in Computer Science",
    institution: "IIT Kharagpur",
    year: "2024 - present",
    details: "Completed 1st year with 8.41 CGPA",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "RCC Institute Of Information Technology",
    year: "2024",
    details: "Graduated with 9.10 CGPA",
  },
  {
    degree: "Class 12",
    institution: "Hariyana Vidya Mandir",
    year: "2020",
    details: "Passed with 93% marks",
  },
  {
    degree: "Class 10",
    institution: "Sri Aurobindo Institute of Education",
    year: "2018",
    details: "Passed with 92% marks",
  },
];
function Education() {
  return (
    <Container fluid className="education-wrapper">
      <div className="bg-image-container">
        <EduBg />
      </div>
      <section className="education-content-wrapper">
        <h2>Educational Background</h2>
        <div className="academic-details">
          {academicDetails.map((item, index) => (
            <div
              key={index}
              className="academic-item"
              style={{ marginLeft: index % 2 === 0 ? "0" : "auto" }}
            >
              <h3>{item.degree}</h3>
              <p>
                <strong>Institution:</strong> {item.institution}
              </p>
              <p>
                <strong>Year:</strong> {item.year}
              </p>
              <p>
                <strong>Details:</strong> {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default Education;
