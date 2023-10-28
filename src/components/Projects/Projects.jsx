import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import Signinreact from "../../Assets/Projects/signin-react.PNG";
import Signin from "../../Assets/Projects/AniSignin.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import Creative from "../../Assets/Projects/Creative.png";
import ResponsiveImageSite from "../../Assets/Projects/responsive-img.png";
import TodoList from "../../Assets/Projects/todolist.PNG";
import WeatherApp from "../../Assets/Projects/weatherApp.png";
import NetflixBackened from "../../Assets/Projects/netflixBackened.png";

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
              imgPath={TodoList}
              isBlog={false}
              title="Todo-List App Redux"
              description="This React Redux To-Do List application streamlines task management, offering users the ability to effortlessly add, delete, and update tasks, and categorize them as completed or incompleted. The straightforward and user-friendly interface provides an ideal practice platform for enhancing my React and Redux skills, especially in state management and interactive web applications."
              ghLink="https://github.com/shahraim/TodoList-ReduxToolkit"
              demoLink="https://todo-redux-shah.vercel.app/" // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather App"
              description="This weather app is designed to provide users with easy access to real-time weather information for any location. It's integrated with an external weather API, enabling users to search and retrieve weather data effortlessly. The app offers a user-friendly interface for searching and displaying weather conditions, such as temperature, humidity, wind speed, and more. It's a practical project for practicing API integration and creating a user-centric weather application."
              ghLink="https://github.com/shahraim/WeatherAPP"
              demoLink="https://weather-app-shah.vercel.app/" // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NetflixBackened}
              isBlog={false}
              title=" Netflix "
              description="This Netflix website is a practice project aimed at replicating the popular streaming service's front-end. While the backend is not live, users can explore the user interface, design, and functionalities. Upon attempting to log in (although backend authentication isn't active), users can gain access to a simulated video page. This project helps develop front-end web development skills and provides insight into the user experience design of a streaming platform like Netflix."
              ghLink="https://github.com/shahraim/NetflixWithBackened"
              demoLink="https://netflix-with-backened.vercel.app/" // <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Signinreact}
              isBlog={false}
              title="Pubg Site"
              description="I just made my first React app for practice at my institute. It was a great experience to get hands-on with React and to apply my knowledge of web development. The app was built using the latest version of React which was a great way to get up to date with the latest technologies. I learned a lot from the experience and am looking forward to further developing my skills in React. I'm confident that I can continue to create more complex and interesting applications with React."
              ghLink="https://github.com/shahraim/React-Assignment"
              demoLink="https://react-assignment-indol.vercel.app/" // <--------Please include a demo link here
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
              imgPath={ResponsiveImageSite}
              isBlog={false}
              title="Responsive Image"
              description="This responsive image website showcases a collection of images presented in visually appealing cards. It has been designed to ensure a seamless and clear viewing experience across various devices, including mobile phones, laptops, and tablets. The responsive design adapts the layout to fit the screen size, allowing users to enjoy the images with clarity and ease, regardless of their device. This project is an excellent practice exercise for honing responsive web design skills and ensuring that content looks great on all screens."
              ghLink="https://github.com/shahraim/responsive-img-site"
              demoLink="https://responsive-img-site.vercel.app/"
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
