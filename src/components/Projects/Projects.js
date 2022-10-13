import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bevincey from "../../Assets/Projects/bevincey.png";
import chatbot from "../../Assets/Projects/chatbot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bevincey}
              title="Bevincey API"
              description="Machine learning API for an ai-powered platform (Bevincey) where users can quickly summarize content to get key points and generate content-based study questions to assess readiness and reinforce learning."
              demoLink="https://bevincey.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot"
              description="This project was part of my second year internship in the Moroccan parliament. The goal was to develop an assistant chatbot based on Deep Learning to answer questions related to the House of Representatives."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Handwritten signatures verification"
              description="The project consists of creating and deploying an API that receives two documents: a scanned signed letter and a scanned form with several signatures. The AI will scan the documents and recognize handwritten signatures, compare the closest signatures. The API will then return both documents highlighting the matching signatures and the accuracy percentage of their match."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot"
              description="This project was part of my second year internship in the Moroccan parliament. The goal was to develop an assistant chatbot based on Deep Learning to answer questions related to the House of Representatives."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot"
              description="This project was part of my second year internship in the Moroccan parliament. The goal was to develop an assistant chatbot based on Deep Learning to answer questions related to the House of Representatives."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Face recognition attendance application"
              description="Face recognition desktop application that automatically tracks employee attendance using computer vision."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
