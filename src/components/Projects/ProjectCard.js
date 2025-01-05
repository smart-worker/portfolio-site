import React from "react";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards({
  title = "",
  desc = "",
  frontendLink = "",
  backendLink = "",
  img = "",
}) {
  return (
    <div className="project-card-view">
      <img
        src={require("../../Assets/ecom.png")}
        alt="card-img"
        className="project-card-img"
      />
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div>
          <Button variant="primary" href={frontendLink} target="_blank">
            <BsGithub /> &nbsp; Frontend
          </Button>
          <Button
            variant="primary"
            href={backendLink}
            style={{ marginLeft: 20 }}
            target="_blank"
          >
            <BsGithub /> &nbsp; Backend
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ProjectCards;
