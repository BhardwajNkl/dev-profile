import { Injectable } from '@angular/core';
import { User } from './user';
import { Skill } from './skill';
import { Project } from './project';
@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor() { }

  getUser():User{
    const user = {
      "name":"Nikhil Bhardwaj",
      "profession":"Fullstack Developer | 1 Year",
      "tagline":"I think & I code. Then I keep looking at the code until it becomes perfect.",
      "introduction":["A solution-driven developer with a strong foundation in Java, JavaScript and SQL languages. Skilled in backend development with Spring Boot, and creating intuitive frontend interfaces using Angular.", 
        "Adept at problem-solving and proficient in working with relational databases. A collaborative team player with the ability to quickly adapt to new challenges and technologies, always eager to learn and contribute effectively.",
      ],
      "mobile":"8888888888",
      "city":"Noida"
    }

    return user;
  }

  getSkills():Skill[]{
    const skills = [
      {
        title:"Java Development",
        keyWords:["Java", "Spring Boot","JPA/Hibernate", "Jnuit & Mockito", "Maven"],
      },
      {
        title:"JavaScript Development",
        keyWords:["JavaScript", "Node JS", "Express", "Nest JS"],
      },
      {
        title:"Database and ORM",
        keyWords:["MySQL", "Redis", "Hibernate", "Sequelize"],
      },
      {
        title:"DevOps",
        keyWords:["Linux", "Git","Jenkins", "Docker", "Kubernetes", "AWS"],
      },
      {
        title:"Frontend",
        keyWords:["HTML & CSS","JavaScript", "Angular", "Bootstrap", "React Native"],
      },
      {
        title:"Other Skills",
        keyWords:["Microservices architecture", "Design Patterns", "Redis", "RabbitMQ", "Camunda"],
      },

    ]
    return skills;
  }

  getProjects():Project[]{
    const projects = [
      {
        title:"Product Catalogue",
        // gitRepo:"https://github.com/BhardwajNkl/product-catalogue-springboot-backend",
        // liveUrl:null,
        description:" A full-stack application with a Spring Boot backend and Angular frontend. Implemented RESTful APIs for authentication, product search, and availability checks. Secured endpoints using JWT authentication and integrated features like auth guards, product filtering, and detailed product views for a seamless user experience.",
        imageName:"product_catalog.jpg"
      },
      {
        title:"Online Food Ordering System",
        // gitRepo:"https://github.com/BhardwajNkl/online-food-ordering-system",
        // liveUrl:null,
        description:"A backend application with RESTful APIs for restaurant and dish management. Customers can register, browse dishes, place orders, and leave reviews. Integrated search, sorting, and secure role-based authentication for admins and customers.",
        imageName:"food_order.jpg"
      },
      {
        title:"Result Management",
        // gitRepo:"https://github.com/BhardwajNkl/node-JS-result-management",
        // liveUrl:null,
        description:"A web application for managing student results. Teachers can add, update, and delete results, while students can securely view their own. Implemented authentication and role-based access control for secure user management.",
        imageName:"result.jpg"
      },
      {
        title:"Contacts App for Android",
        // gitRepo:null,
        // liveUrl:null,
        description:"Built an android app for managing contacts with an intuitive UI. Users can add, edit, delete, and search contacts, with data securely stored in an SQLite database. Features include a favorites section for quick access.",
        imageName:"contacts.jpg"
      },
      {
        title:"Task Management",
        // gitRepo:"https://github.com/BhardwajNkl/task-manager",
        // liveUrl:null,
        description:"Built a backend using NestJS for task management. Implemented MySQL for data storage, API caching with Redis, and logging for monitoring. Used RabbitMQ to publish messages on task creation, update, and deletion. Managed application processes with PM2 for reliability.",
        imageName:"task_manager.png"
      },

      // {
      //   title:"Notes Management",
      //   techStack:["Maven","Spring Boot","JPA","MySQL", "Spring Security"],
      //   gitRepo:null,
      //   liveUrl:null,
      //   "description":"The Notes Management System allows users to securely store and manage their personal notes. Upon logging in, users can access their 10 most recent notes, while older notes are automatically deleted every hour. This feature was implemented as a learning exercise to explore task scheduling. The application supports full CRUD functionality, allowing users to create, view, and delete notes. Input validation ensures that notes include only specific special characters [@, ; & * + -] and are limited to 500 characters. The system is designed with a clean, intuitive interface for a seamless user experience.",
      //   seniorRating:"4/5"
      // },

      // {
      //   title:"Blog App",
      //   techStack:["React","Redux","Bootstrap","CSS","NPM"],
      //   gitRepo:"https://github.com/BhardwajNkl/react-blog-app",
      //   liveUrl:null,
      //   // "description":"The app allows a user to create, update, delete and like notes. Utilized Redux for state management. The app uses browser's local storage for persistence."
      //   description:"In this project, I developed a simple blogging application using React.js. The app allows users to create, view, update, and delete posts, with all data stored locally in the browser's localStorage. Key features include the ability to click on a post to view its detailed content, edit the post, and delete it if needed. This project helped me deepen my understanding of React components, state management, and localStorage.",
      //   seniorRating:"4.2/5"
      // },
      // {
      //   title:"BConnect",
      //   techStack:["Node JS","Express JS", "EJS", "Socket.io","CSS"],
      //   gitRepo:null,
      //   liveUrl:null,
      //   "description":"An end-to-end encryption-based chat app. Users can find one another using their BConnect numbers. They can save contacts. Users can talk to online users only. There is no persistence of messages."
      // },

      // {
      //   title:"BTube",
      //   techStack:["Angular","Bootstrap","CSS"],
      //   gitRepo:null,
      //   liveUrl:null,
      //   "description":"Created a frontend application that will work as a video library. The application uses YouTube's API for searching and playing videos. This application helps in avoiding distractions faced on YouTube."
      // },
      // {
      //   title:"Microservices Project",
      //   techStack:["Maven", "Spring Boot", "Spring Cloud", "JPA","H2 in-memory database"],
      //   gitRepo:null,
      //   liveUrl:null,
      //   description:"Designed and implemented a microservices-based system using Spring Boot to explore microservices architecture. The project features two services: Customer Management and Account Management. The Customer Management service handles customer data, including adding, retrieving, updating, and deleting customers, with the added functionality that deleting a customer also removes their associated account. The Account Management service manages account operations such as deposit, withdrawal, retrieving account details, and deleting accounts, with validation of customer details for transactions. The system utilizes Eureka Server for service discovery, an API Gateway, and a Config Server for centralized configuration. This project helped me learn designing microservices systems.",
      //   seniorRating:"4/5"
      // },
      // {
      //   title:"ANPR system",
      //   techStack:["Python","YOLOv8"],
      //   gitRepo:null,
      //   liveUrl:null,
      //   "description":"Created a system to automatically recognise and read number plates of vehicles. The system saves the detected vehicle numbers in a database.",
      //   seniorRating:null 
      // },      
    ]
    return projects;
  }

}
