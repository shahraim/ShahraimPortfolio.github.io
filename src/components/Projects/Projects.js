import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import Signinreact from "../../Assets/Projects/signin-react.PNG";
import Signin from "../../Assets/Projects/AniSignin.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import Creative from "../../Assets/Projects/Creative.png";
import Todolist from "../../Assets/Projects/todolist.PNG";

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
              imgPath={Signinreact}
              isBlog={false}
              title="Pubg Site"
              description="I just made my first React app for practice at my institute. It was a great experience to get hands-on with React and to apply my knowledge of web development. The app was built using the latest version of React which was a great way to get up to date with the latest technologies. I learned a lot from the experience and am looking forward to further developing my skills in React. I'm confident that I can continue to create more complex and interesting applications with React."
              ghLink="https://github.com/shahraim/React-Assignment"
              demoLink="https://react-assignment-indol.vercel.app/"     // <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="Fast Food Web"
              description="Building an awesome e-commerce website for a fast food business is no small feat. It requires a thorough understanding of the industry, as well as the technical know-how to bring the project to fruition. From the front end design to the backend coding, there are many components that need to be taken into consideration."
              ghLink="https://github.com/shahraim/EcommercePractice.github.io"
              demoLink="https://shahraim.github.io/EcommercePractice.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="Todo List"
              description="I've created a To-Do List in my Institute Assignment in React. I've set up the main components of the application. I've also written functions to add, delete, and complete tasks. I've tested the application to make sure that it works properly, and I'm now ready to deploy it. I'm confident that the To-Do List that I've created will be a useful tool for my Institute Assignment in React."
              ghLink="https://github.com/shahraim/todo-list"
              demoLink="https://todo-list-rust-tau.vercel.app/"
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


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
