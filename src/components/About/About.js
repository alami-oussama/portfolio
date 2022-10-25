import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Know Who <span className="purple"> I'm </span>
            </h1>
            <p className="about-body">
              I'm an
              <i>
                <b className="purple">
                  {" "}
                  Artificial Intelligence Engineering Student
                </b>
              </i>{" "}
              from ENSIAS, and{" "}
              <i>
                <b className="purple">Machine Learning Freelancer </b>
              </i>{" "}
              at Freelancer.com and Upwork.com.
              <br />
              <br />I am motivated to improve my skills and learn new ones,
              which I can then use to create real projects. I stay up-to-date
              with advancements in
              <i>
                <b className="purple"> AI world </b>
              </i>
              because it is one of the most rapidly-growing areas in software
              engineering.
              <br />
              <br />
              My field of Interest's are building new
              <i>
                <b className="purple"> Machine Learning/Deep Learning </b>
              </i>
              products.
              <br />
              <br />
              In additional to machine learning and deep learning I can also do:{" "}
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight />{" "}
                <i>
                  <b className="purple">Python programming</b>
                </i>
              </li>
              <li className="about-activity">
                <ImPointRight />{" "}
                <i>
                  <b className="purple">API development</b>
                </i>
              </li>
              <li className="about-activity">
                <ImPointRight />{" "}
                <i>
                  <b className="purple">Automation</b>
                </i>
              </li>
            </ul>
          </Col>
          <Col md={4} className="myAvtar">
            <Row>
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Row>
            <Row>
              <Col md={12} className="about-social">
                <h1>Find me around the web 🌎</h1>
                <p>
                  Feel free to <span className="purple">connect </span>with me
                </p>
                <ul className="about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/alami-oussama"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/alami-oussama/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="mailto:oussama.alami.ai@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiOutlineMail />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default About;
