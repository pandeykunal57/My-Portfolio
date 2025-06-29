import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/food.png";
import blog from "../../Assets/Projects/blog.png";
import notes from "../../Assets/Projects/notes.png";
import travel from "../../Assets/Projects/travel.png";
import login from "../../Assets/Projects/login.png";
import drum from "../../Assets/Projects/drum.png";
import emp from "../../Assets/Projects/emp.png";
import finlytics from "../../Assets/Projects/finlytics.png";
import explore from "../../Assets/Projects/explore.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few personal projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finlytics}
              isBlog={false}
              title="FINLYTICS AI"
              description="FINLYTICS AI – an intelligent finance platform for tracking income, expenses, and budgets. Features include real-time transaction updates, AI-powered receipt scanning, smart budget insights, and interactive financial reports. Helps users manage money smarter, reduce overspending, and achieve financial goals."
              ghLink="https://github.com/pandeykunal57/FINLYTICS-AI"
              demoLink="https://finlytics-ai.vercel.app/" 
              
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emp}
              isBlog={false}
              title="Employee Task Management"
              description="Developed a role-based Employee Task Management System using React.js with separate dashboards for Admin and Employees. Admins can assign and manage tasks, while employees can view and update their tasks. Used Context API for state management and `localStorage` for data persistence, enabling seamless login sessions and task handling without a backend."
              ghLink="https://github.com/pandeykunal57/Employee-Task-Management"
              demoLink="https://employee-task-management-chi.vercel.app/" 
              
            />
          </Col>
         
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={explore}
              isBlog={false}
              title="ExploreX"
              description="ExploreX is a React-based web app that displays a list of countries in a card format, showing details like capital, currency, and population. Users can click a card for more in-depth information. Features include continent-based filtering, a search bar, and sorting options, all working simultaneously for seamless exploration."
              ghLink="https://github.com/pandeykunal57/ExploreX"
              demoLink="https://explore-x-ten.vercel.app/" 
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Ordering Website"
              description="Developed a full-stack food ordering web application using Node.js, Express.js, MySQL, and EJS. The platform enables users to browse products, add items to the cart, and place orders. It includes features like session-based cart management, order tracking, checkout, and payment processing. MySQL is used for database interactions, handling users, products, and orders. The application ensures smooth navigation with dynamic rendering using EJS templates.angout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/pandeykunal57/Food-Ordering-Website"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="To-Do Web App"
              description="My personal blog page build This is a full-stack To-Do List web app with a React frontend, a Node.js backend, and PostgreSQL for storage. It allows users to add, delete, and mark tasks as completed, with smooth animations and responsive design. RESTful APIs handle task management, ensuring seamless integration with the database.with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/pandeykunal57/Notes-App"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Post"
              description="A blog management system built using Node.js, Express.js, and EJS for server-side rendering with full CRUD (Create, Read, Update, Delete) operations. PostgreSQL serves as the database to store posts and metadata, while HTML, CSS, and JavaScript handle the frontend. The app emphasizes responsive design and efficient database integration to deliver a seamless user experience."
              ghLink="https://github.com/pandeykunal57/Blogging_WEBSITE"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Tracker"
              description="The Country Tracker Web Application is an interactive tool designed to help users visualize and track the countries they have visited. By entering the name of a country, users can highlight it on a world map, creating a personalized visual record of their travels. This project combines modern web technologies to offer an engaging and user-friendly experience."
              ghLink="https://github.com/pandeykunal57/Family-Travel-Tracker"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="Login Page front end Design"
              description="A front End design for a Login Page with Animations."
              ghLink="https://github.com/pandeykunal57/Login-page--Front_end-"
              demoLink="https://pandeykunal57.github.io/Login-page--Front_end-/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drum}
              isBlog={false}
              title="Drum Kit"
              description="A Virtual Drum Set that can be played using Keyboard or Mouse-click"
              ghLink="https://github.com/pandeykunal57/Drum-Kit"
              demoLink="https://pandeykunal57.github.io/Drum-Kit/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
