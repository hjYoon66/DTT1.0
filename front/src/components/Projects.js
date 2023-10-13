import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const projects = [
    {
      title: "Restaurant 1",
      description1: "tel: 123-456-789",
      description2: "Opening Hour: 10:00 AM - 09:00 PM",
      imgUrl: projImg1,
      pageUrl: "/Restaurant1",
    },
    {
      title: "Restaurant 2",
      description1: "tel: 987-654-321",
      description2: "Opening Hour: 09:00 AM - 06:00 PM",
      imgUrl: projImg2,
      pageUrl: "/Restaurant1",
    },
    {
      title: "Restaurant 3",
      description1: "매장 준비중입니다.",
      imgUrl: projImg3,
      pageUrl: "/Restaurant1",
    },
    {
      title: "Restaurant 4",
      description1: "매장 준비중입니다.",
      imgUrl: projImg1,
      pageUrl: "/Restaurant1",
    },
    {
      title: "Restaurant 5",
      description1: "매장 준비중입니다.",
      imgUrl: projImg2,
      pageUrl: "/Restaurant1",
    },
    {
      title: "Restaurant 6",
      description1: "매장 준비중입니다.",
      imgUrl: projImg3,
      pageUrl: "/Restaurant1",
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
                  <h2>Restaurants</h2>
                  <p>Please choose the restaurant you want!</p>
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
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>매장 준비중입니다.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>매장 준비중입니다.</p>
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
export default Projects
