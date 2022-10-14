import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bevincey from "../../Assets/Projects/bevincey.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import art from "../../Assets/Projects/art.jpg";
import faceRecognition from "../../Assets/Projects/face-recognition.jpg";
import timeSeries from "../../Assets/Projects/time-series.jpg";
import signature from "../../Assets/Projects/signature.png";

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
              title="Bevincey"
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
              imgPath={signature}
              isBlog={false}
              title="Handwritten signature verification"
              description="The project involve creating an API that receives two scanned documents: a signed letter and a form with several signatures, and compare the signatures to see if they match. The API will then return the documents with the matching signatures highlighted, along with the accuracy percentage of the match."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              title="AI makes art"
              description="This project is all about using GANs (generative adversarial networks) to create works of art. The AI will be trained on a dataset of images, and will then generate new images based on what it has learned. It will be interesting to see what kind of art the AI comes up with!"
              ghLink="https://github.com/alami-oussama/AI-Creates-Art"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timeSeries}
              isBlog={false}
              title="Time series forecasting"
              description="The objective of this project was to use machine learning to predict stock prices. A variety of machine learning models were employed and compared to determine the most accurate model."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceRecognition}
              isBlog={false}
              title="Face recognition attendance application"
              description="A desktop application that uses computer vision to automatically track employee attendance. It can be used by companies to identify employees as they enter and exit the office, and to track working hours."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
