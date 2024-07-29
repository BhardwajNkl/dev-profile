import { Injectable } from '@angular/core';
import { User } from './user';
import { Skill } from './skill';
import { Project } from './project';
import { SkillFilter } from './skill-filter';
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
      "introduction":["Hello and welcome to my portfolio! I am a Java Full Stack Developer with one year of comprehensive training in various technologies. Although I have not yet had the chance to work on real-world projects, I have worked hard during the bench time to refine my skills and strengthen my understanding of full stack development.",
        "I specialize in developing backend solutions using Spring Boot and creating engaging frontend experiences with Angular. I am proficient in working with relational databases and writing efficient SQL queries. Additionally, my experience with JPA/Hibernate enables me to handle data management seamlessly. I can also write unit and integration tests that ensures the quality and reliability of my code.",
        "Please explore my portfolio to see the projects I have worked on during my training and personal endeavors. I am eager to bring my skills to real-world projects and am confident in my ability to contribute effectively as a collaborative team person."
      ],
      "mobile":"8888888888",
      "city":"Noida"
    }

    return user;
  }

  getSkills():Skill[]{
    const skills = [
      // favourites

      {
        title:"Java",
        expertise:"Interediate",
        description:"Proficient in Java with extensive hands-on experience. Skilled in object-oriented programming, collections, exception handling, and multithreading.",
        category:["favourites"],
        keyWords:["Java 8 features"],
      },
      {
        title:"Spring Boot",
        expertise:"Intermediate",
        description:"Proficient in developing web applications using Spring Boot. Skilled in building RESTful APIs, creating data access layer and securing the application using Spring Security.",
        category:["favourites"],
        keyWords:["REST", "MVC", "Bean Validation", "Profiles"],
      },
      {
        title:"JPA/Hibernate",
        expertise:"Intermediate",
        description:"Proficient in using JPA with Hibernate for ORM. Skilled in domain modelling, converting the model into JPA entities and mappings. I can utilize JPA's custom finders as well as write my own efficient queries.",
        category:["favourites"],
        keyWords:["JpaRepository", "Paging", "Sorting"],
      },
      {
        title:"Unit and Integration Testing",
        expertise:"Intermediate",
        description:"Skilled in writing unit and integration tests using frameworks such as JUnit, Mockito and MockMVC. With finely written tests, I ensure code quality and reliability.",
        category:["favourites"],
        keyWords:[],
      },

      {
        title:"HTML CSS & JS",
        expertise:"Intermediate",
        description:"Proficient in creating responsive and interactive web pages using HTML, CSS, and JavaScript. Able to create decent design using CSS. Strong Foundation in JavaScript.",
        category:["favourites"],
        keyWords:["Responsive Websites", "ES6 Features","Asynchronous JS"],
      },
      {
        title:"Angular",
        expertise:"Basic",
        description:"Angular is my favourite frontend framework. Skilled in building components, services, and integrating RESTful APIs to create efficient frontend applications.",
        category:["favourites"],
        keyWords:["Interceptor","Guard","Component Lifecycle", "Routing","Form Validaion"],
      },
      
      {
        title:"MySQL",
        expertise:"Intermediate",
        description:"Good at designing and working with MySQL databases. Skilled in writing queries and optimizing database performance.",
        category:["Favourites"],
        keyWords:["SQL"],
      },

      // other
      {
        title:"React",
        expertise:"Basic",
        description:"Hands on learning experience. Familiar with components, routing, props, hooks, context API, Redux and Middleware.",
        category:["other"],
        keyWords:[],
      },
      {
        title:"Express JS",
        expertise:"Basic",
        description:"I have done a couple of learning projects. Familiar with routing, authentication, authorization, REST APIs, EJS and Sequelize ORM.",
        category:["other"],
        keyWords:[],
      },
      {
        title:"React Native",
        expertise:"Basic",
        description:"Basic familiarity. Gained hands on experience by working on a couple of android app development projects.",
        category:["other"],
        keyWords:[],
      },
      {
        title:"Git",
        expertise:"Intermediate",
        description:"Familiar with repository initialization, remote repository setup, branching, push, pull, merge, merge conflict handling and collaboration.",
        category:["other"],
        keyWords:[],
      },
      {
        title:"Jenkins",
        expertise:"Basic",
        description:"Familiar with job creation, build scheduling, scripting, SCM setup, etc.",
        category:["other"],
        keyWords:[],
      },
      {
        title:"AWS",
        expertise:"Basic",
        description:"Familiar with EC2, S3, RDS, Lambda, Security groups, VPC, subnets and NACLs. Can deploy applications on EC2 or Elastic Beanstalk.",
        category:["other"],
        keyWords:[],
      },
      
      // {
      //   title:"Microservices",
      //   expertise:"Basic",
      //   description:"Can implement different services, discovery server, inter-service communications, API gateway and centralized configurations. Familiar with exception handling mechanisms such as fallback and circuit-breaker patterns. ",
      //   category:["other"],
      // },

      // {
      //   title:"Docker and Kubernates",
      //   expertise:"Basic",
      //   description:"Getting an image, running, create own image and publishing to docker hub. Docker network, docker compose.",
      //   category:["other"],
      //   associatedProjects:["project1"]
      // }

      // {
      //   title:"Elastisearch",
      //   expertise:"Basic",
      //   description:"Hands on learning experience. Can integrate with Spring applications and utilize as per need.",
      //   category:["other"],
      //   associatedProjects:["project1"]
      // },
      // {
      //   title:"Kafka",
      //   expertise:"Basic",
      //   description:"Hands on learning experience. Can integrate with Spring applications and utilize efficiently.",
      //   category:["other"],
      //   associatedProjects:["project1"]
      // },
      // {
      //   title:"Redis",
      //   expertise:"Basic",
      //   description:"Hands on learning experience. Can integrate with Spring applications and utilize efficiently.",
      //   category:["other"],
      //   associatedProjects:["project1"]
      // }

    ]
    return skills;
  }

  getSkillFilters():SkillFilter[]{
    const skillFilters=[
      {
        filter:"Favourites"
      },
      {
        filter:"Other"
      }
    ]
    return skillFilters;
  }


  getProjects():Project[]{
    const projects = [
      {
        title:"Product Catalogue Backend",
        techStack:["Spring Boot","Spring Data JPA","MySQL"],
        gitRepo:"https://github.com/BhardwajNkl/product-catalogue-springboot-backend",
        liveUrl:"not available",
        "description":"Created REST APIs for searching products, viewing product details, checking availability, etc. Implemented JWT token based authentication to secure some endpoints. Configured CORS properly."
      },
      {
        title:"Product Catalogue Frontend",
        techStack:["Angular","Bootstrap","CSS"],
        gitRepo:"https://github.com/BhardwajNkl/product-catalogue-angular-frontent",
        liveUrl:"not available",
        "description":"Created a decent frontend for the product catalogue application. Implemented auth guards. Implemented a feature to filter the products based on brands or price range."
      },
      {
        title:"React Blog App",
        techStack:["React","Redux","Bootstrap","CSS"],
        gitRepo:"https://github.com/BhardwajNkl/react-blog-app",
        liveUrl:"not available",
        "description":"The app allows a user to create, update, delete and like notes. Utilized Redux for state management. The app uses browser's local storage for persistence."
      },
      {
        title:"BConnect",
        techStack:["Node JS","Express JS", "EJS", "Socket.io","CSS"],
        gitRepo:"not available",
        liveUrl:"not available",
        "description":"An end-to-end encryption-based chat app. Users can find one another using their BConnect numbers. They can save contacts. Users can talk to online users only. There is no persistence of messages."
      },
      {
        title:"Result Management",
        techStack:["Node JS","Express JS","EJS","CSS","MySQL","Sequelize"],
        gitRepo:"https://github.com/BhardwajNkl/node-JS-result-management",
        liveUrl:"not available",
        "description":"A web application for teachers to create, update and delete results. Students can view their results. Implemented JWT token based authentication and role based authorization."
      },
      {
        title:"M-2",
        techStack:["Spring Boot","Spring Data JPA","MySQL"],
        gitRepo:"not available",
        liveUrl:"not available",
        "description":"Description not available"
        
      },
      {
        title:"ANPR system",
        techStack:["Python","YOLOv8"],
        gitRepo:"not available",
        liveUrl:"not available",
        "description":"Created a system to automatically recognise and read number plates of vehicles. The system saves the detected vehicle numbers in a database."
        
      },
      // {
      //   title:"BTube",
      //   techStack:["Angular","Bootstrap","CSS"],
      //   gitRepo:"not available",
      //   liveUrl:"not available",
      //   "description":"Created a frontend application that will work as a video library. The application uses YouTube's API for searching and playing videos. This application helps in avoiding distractions faced on YouTube."
      // },
      {
        title:"Microservices POC",
        techStack:["Spring Boot", "Spring Cloud", "Spring Data JPA","H2 in-memory database"],
        gitRepo:"not available",
        liveUrl:"not available",
        "description":"Created two microservices; customer-management and account management, each having various required endpoints to support common banking operations such as account creation, deposit, withdrawal and account deletion. Proper validation and exception handling was done for both the services. Utilized Eureka server for service discovery. Implemented API gateway and config-server as well."
      }
    ]
    return projects;
  }

}
