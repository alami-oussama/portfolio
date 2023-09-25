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
              As an accomplished
              <i>
                <b className="purple"> Artificial Intelligence Engineer,</b>
              </i>{" "}
              I harness the power of AI to develop innovative solutions and
              drive efficiency. My passion lies in not only expanding my own
              knowledge base, but also in applying this knowledge in real-world
              projects that have a profound impact.
              <br />
              <br />I pride myself on being at the forefront of technological
              advancements in AI, an ever-evolving field. My primary interest
              lies in creating cutting-edge
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning and Deep Learning products{" "}
                </b>
              </i>
              that challenge the status quo and redefine efficiency.
              <br />
              <br />
              Alongside my specialization in AI, I bring to the table a robust
              suite of skills including:{" "}
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
