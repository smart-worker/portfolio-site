import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title = "", desc = "", link = "", img = "" }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={img} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{desc}</Card.Text>
        <Button variant="primary" href={link} target="_blank">
          <BsGithub /> &nbsp; GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
