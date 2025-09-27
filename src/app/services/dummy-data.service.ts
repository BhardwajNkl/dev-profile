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
      "profession":"Backend Developer | 2.5 Year",
      "tagline":"I think & I code. Then I keep looking at the code until it becomes perfect.",
      // "introduction":["I specialize in building efficient, scalable and secure backend solutions with Java, JavaScript and various programming tools and technologies.",
      "introduction":["A backend developer who enjoys thinking deeply about data modelling, low-level design using object oriented methodology and design patterns that make systems clean and reliable.",
        "I work mostly with JavaScript and Java, building APIs and systems with care from the ground up.",
        "Let's connect!"
      ],
      "mobile":"8888888888",
      "city":"Noida"
    }

    return user;
  }

  getSkills():Skill[]{
    const skills = [
      {
        title:"Java & Spring",
        keyWords:["Java", "Spring Boot","JPA", "Jnuit & Mockito"],
      },
      {
        title:"JavaScript & Node JS",
        keyWords:["JavaScript", "TypeScript", "Express JS", "Nest JS"],
      },
      {
        title:"Database & ORM",
        keyWords:["MySQL", "MongDB", "Sequelize",  "TypeORM"],
      },
      {
        title:"Developer tools & platforms familiarity",
        keyWords:["Git", "Jenkins", "Docker", "Kubernetes", "Openshift", "Jira"],
      },
      {
        title:"Other Skills",
        keyWords:["Redis", "RabbitMQ", "Camunda", "Angular"],
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
        title:"Result Management System",
        // gitRepo:"https://github.com/BhardwajNkl/node-JS-result-management",
        // liveUrl:null,
        description:"An Express JS based web application for managing student results. Teachers can add, update, and delete results, while students can securely view their own. Implemented authentication and role-based access control for secure user management.",
        imageName:"result.jpg"
      },
      {
        title:"Contacts App for Android",
        // gitRepo:null,
        // liveUrl:null,
        description:"Built an android app using React Native for managing contacts. Users can add, edit, delete, and search contacts, with data securely stored in an SQLite database. Features include a favorites section for quick access.",
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
