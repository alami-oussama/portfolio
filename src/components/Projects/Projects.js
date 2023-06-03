import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bevinzey from "../../Assets/Projects/bevinzey.png";
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
              imgPath={bevinzey}
              title="Bevinzey"
              description="Machine learning API for an ai-powered platform (Bevinzey.com) where users can quickly summarize content to get key points and generate content-based study questions to assess readiness and reinforce learning."
              demoLink="https://bevinzey.com/"
              freeLink="https://www.freelancer.com/projects/website-design/Powered-Test-Question-Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={matching}
              isBlog={false}
              title="Job Resume Matching"
              description="During my six-month capstone internship with EMGS Group in France, I was entrusted with a significant project that involved the development of a matching tool for a Sourcing platform. The primary aim of this initiative was to streamline and accelerate the recruitment process while also reducing associated costs."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signature}
              isBlog={false}
              title="Handwritten signature verification"
              description="This project involves creating an object detection based API that receives two scanned documents: a signed letter and a form with several signatures. The API will then recognize and highlight the signatures and compare them to see if they match."
              freeLink="https://www.freelancer.com/projects/flutter/Build-image-recognition-app-identify"
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
              imgPath={timeSeries}
              isBlog={false}
              title="Time series forecasting"
              description="The objective of this project was to use machine learning to predict stock prices. A variety of machine learning models were employed and compared to determine the most accurate model."
              freeLink="https://www.freelancer.com/projects/python/Machine-learning-time-series-python"
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
