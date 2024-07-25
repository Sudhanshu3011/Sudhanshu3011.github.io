// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// // import 'App.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Health-App",
//       description: "Paitent Self-Analysis",
//       imgUrl: projImg1,
//     },
//     {
//       title: "GPT-Lite",
//       description: "Ask me Question",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Earlier Projects",
//       description: "Frontend",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Projects</h2>
//                   <p>Three accomplished projects: a health application designed to track wellness metrics, GPT Lite, a streamlined version of the GPT language model, and a portfolio showcasing various professional achievements and skills.</p>
//                   <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                     <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                       <Nav.Item>
//                         <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                       </Nav.Item>
//                     </Nav>
//                     <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                       <Tab.Pane eventKey="first">
//                         <Row>
//                           {
//                             projects.map((project, index) => {
//                               return (
//                                 <ProjectCard
//                                   key={index}
//                                   {...project}
//                                 />
//                               )
//                             })
//                           }
//                         </Row>
//                       </Tab.Pane>

//                     </Tab.Content>
//                   </Tab.Container>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }


import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Health-App",
      description: "Patient Self-Analysis",
      imgUrl: projImg1,
    },
    {
      title: "GPT-Lite",
      description: "Ask me a Question",
      imgUrl: projImg2,
    },
    {
      title: "Earlier Projects",
      description: "Frontend Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Three accomplished projects: a health application designed for patient self-analysis, GPT Lite for streamlined question-answering, and earlier projects showcasing frontend development skills.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* Add content for other tabs if necessary */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Shape" />
    </section>
  );
}
