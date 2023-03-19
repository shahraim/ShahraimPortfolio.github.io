import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import CirNav from "../../Assets/Projects/CirNav.png";
import Signin from "../../Assets/Projects/AniSignin.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import Creative from "../../Assets/Projects/Creative.png";
import netflix from "../../Assets/Projects/netflix.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="Fast Food Web"
              description="I'm building an Fast Food website for my practice, so I can make some awesome e-commerce websites."
              ghLink="https://github.com/shahraim/EcommercePractice.github.io"
              demoLink="https://shahraim.github.io/EcommercePractice.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix"
              description="The project is my last test assignment at my institute and I tried to make a Netflix website as best as I could."
              ghLink="https://github.com/shahraim/netflix.github.io"
              demoLink="https://shahraim.github.io/netflix.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Signin}
              isBlog={false}
              title="Animated SignIn"
              description="In this project, I'm making animated sign-in forms to practice CSS and learn more about it"
              ghLink="https://github.com/shahraim/AnimateSignInForm.github.io"
              demoLink="https://shahraim.github.io/AnimateSignInForm.github.io/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Making an iphone theme calculator with javascript assignment is an amazing project."
              ghLink="https://github.com/shahraim/calculator-sg"
              demoLink="https://calculator-sg.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Creative}
              isBlog={false}
              title="Creative Studio Web"
              description="Making a practice website about my creative studio in order to give you an idea of my portfolio and my team in practice."
              ghLink="https://github.com/shahraim/Studio.github.io"
              demoLink="https://shahraim.github.io/Studio.github.io/" //<--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CirNav}
              isBlog={false}
              title="Circular Navbar"
              description="Creating a new animation using a circular navigation bar is a good way to learn more about CSS as well as make a new animation."
              ghLink="https://github.com/shahraim/CircularNavbar.github"
              demoLink="https://shahraim.github.io/CircularNavbar.github/"     // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
