import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";

function Skills() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default Skills;
