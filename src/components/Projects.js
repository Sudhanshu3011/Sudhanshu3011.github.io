import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import notesImg1 from "../assets/img/notes-DSA.png";
import notesImg2 from "../assets/img/notes-ML.png";
import notesImg3 from "../assets/img/notes-DL.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // 👉 first tab projects
  const tab1Projects = [
    {
      title: "Deep Fake Detection",
      description: "Forgery detection",
      imgUrl: projImg5,
      link: "https://github.com/Sudhanshu3011/DeepFakeDetection",
    },
    {
      title: "Health-App",
      description: "Paitent Self-Analysis",
      imgUrl: projImg1,
      link: "https://bejewelled-marzipan-226883.netlify.app/",
    },
    {
      title: "Chatbot",
      description: "Offline chatbot",
      imgUrl: projImg4,
      link: "https://github.com/Sudhanshu3011/TelegramBot",
    },
  ];

  // 👉 second tab projects
  const tab2Projects = [
    {
      title: "Agricare",
      description: "Smart Farming-ML",
      imgUrl: projImg3,
      link: "https://sudhanshu3011.github.io/Agricare/",
    },
    {
      title: "GPT-Lite",
      description: "Ask me Question",
      imgUrl: projImg2,
      link: "https://github.com/Sudhanshu3011/GenAI",
    },

    {
      title: "DSA",
      description: "C++",
      imgUrl: projImg6,
      link: "https://github.com/Sudhanshu3011/GenAI/",
    },
  ];

  // third tab projects
  const tab3Projects = [
    {
      title: "DSA",
      description: "Handwriten Notes",
      imgUrl: notesImg1,
      link: "https://drive.google.com/file/d/1uFhfMRkRhjQN77MkKVF3NBVJVLBUFrx-/view?usp=drive_link",
    },
    {
      title: "ML",
      description: "Handwriten Notes",
      imgUrl: notesImg2,
      link: "https://drive.google.com/file/d/1uCCuyYKvPE1HPJIwW0-yb-wXLTpwYCy1/view?usp=drive_link",
    },
    {
      title: "DL",
      description: "Handwriten Notes",
      imgUrl: notesImg3,
      link: "https://drive.google.com/file/d/19Z8z2hquDD_AsT1c86f-Jz0aPDBZjl-F/view?usp=drive_link",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    {/* Tab Content */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* TAB 1 */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {tab1Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* TAB 2 */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {tab2Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* TAB 3 */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {tab3Projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
