import { Injectable } from '@angular/core';
import { User } from './user';
import { Skill } from './skill';
import { Project } from './project';
import { SkillFilter } from './skill-filter';
import { Bite } from './bite';
@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor() { }

  getUser():User{
    const user = {
      "name":"Nikhil Bhardwaj",
      "profession":"Fullstack Developer",
      "tagline":"I think & I code. Then I keep looking at the code until it becomes perfect.",
      "introductionP1":"A perfection-oriented Java developer with a Master's degree in computer application and a comprehensive training in full stack development. Proven ability to write clean code and implement design patterns effectively.",
      "introductionP2":"The purpose of creating this website is to let employers know about my skills and capabilities as a web developer. I also document my thoughts & learning notes here.",
      "mobile":"8888888888",
      "city":"Noida"
    }

    return user;
  }

  getSkills():Skill[]{
    const skills = [
      {
        title:"HTML",
        expertise:"Experienced",
        description:"Can easily create nicely structured web pages.",
        category:["programming"],
        associatedProjects:["project1","project2","project3"]
      },
      {
        title:"CSS",
        expertise:"Basic",
        description:"Hands on learning experience. Familiar with selectors, properties, media queries, flexbox, grid and animations.",
        category:["programming"],
        associatedProjects:["project1","project2"]
      },
      {
        title:"JavaScript",
        expertise:"Experienced",
        description:"Can comfortably implement client-side functionalities. Familiar with functions, event listeners, DOM manipulation, classes & objects, asynchronous JS and ES6 features.",
        category:["programming"],
        associatedProjects:["project1","project2","project3"]
      },
      {
        title:"React",
        expertise:"Basic",
        description:"Hands on learning experience. Familiar with components, routing, props, hooks, context API, Redux and Middleware.",
        category:["programming","framework"],
        associatedProjects:["project1"]
      },
      {
        title:"Angular",
        expertise:"Basic",
        description:"Good understanding and practice of Angualr components, data binding, directives, pipes, services, routing, auth guards, lifecycle methods, forms & form validation, and HTTP.",
        category:["programming","framework"],
        associatedProjects:["project1"]
      },
      {
        title:"Java",
        expertise:"Experienced",
        description:"Sound knowledge and practice of core Java including object-oriented programming, collection framework, exception handling, multi-threaded programming and file handling. Familiar with Enums, Streams API, functional interfaces and lambdas.",
        category:["programming"],
        associatedProjects:["project1"]
      },
      {
        title:"Spring Boot",
        expertise:"Intermediate",
        description:"Have the ability to build scalable and secure web applications. Hands on learning experience covering Spring Core, Spring Data, Spring MVC, Spring Boot and Spring Security.",
        category:["programming","framework"],
        associatedProjects:["project1"]
      },
      {
        title:"JPA/Hibernate",
        expertise:"Basic",
        description:"Good understanding and practice of entities, entity relationship mapping, entity fetching, persistence lifecycle and custom queries.",
        category:["framework"],
        associatedProjects:["project1"]
      },
      {
        title:"Microservices",
        expertise:"Basic",
        description:"Can implement different services, discovery server, inter-service communications, API gateway and centralized configurations. Familiar with exception handling mechanisms such as fallback and circuit-breaker patterns. ",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"Unit Testing",
        expertise:"Basic",
        description:"Hands on learning experience with JUnit and Mockito. Ability to write very fine test cases with great code coverage.",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"Node And Express",
        expertise:"Intermediate",
        description:"Done a couple of learning projects. Familiar with routing, authentication, authorization, REST APIs, EJS and Sequelize ORM.",
        category:["programming","framework"],
        associatedProjects:["project1"]
      },
      {
        title:"MySQL",
        expertise:"Experienced",
        description:"Strong SQL and database design skills. Familiar with views, triggers, stored procedures, indexing, transactions and user management.",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"Elastisearch",
        expertise:"Basic",
        description:"Hands on learning experience. Can integrate with Spring applications and utilize as per need.",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"Kafka",
        expertise:"Basic",
        description:"Hands on learning experience. Can integrate with Spring applications and utilize efficiently.",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"Redis",
        expertise:"Basic",
        description:"Hands on learning experience. Can integrate with Spring applications and utilize efficiently.",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"Git",
        expertise:"Experienced",
        description:"Familiar with repository initialization, remote repository setup, staging, commit, branching, push, pull, merge, merge conflict handling and collaboration.",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"Jenkins",
        expertise:"Basic",
        description:"Familiar with setup, job creation, build scheduling, scripting, git repository connection, etc.",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"AWS",
        expertise:"Basic",
        description:"Familiar with EC2, S3 RDS and Lambda. Security groups, VPC, subnets and NACLs",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"Docker and Kubernates",
        expertise:"Basic",
        description:"Getting an image, running, create own image and publishing to docker hub. Docker network, docker compose.",
        category:["other"],
        associatedProjects:["project1"]
      },
      {
        title:"Camunda",
        expertise:"Basic",
        description:"Familiar with BPMN elements such as tasks, error events, message events, timer events, gateways, sub processes, etc. Familiar with Camunda Engine REST APIs and Camunda & Spring Boot integration.",
        category:["programming","other"],
        associatedProjects:["project1"]
      }

    ]
    return skills;
  }

  getSkillFilters():SkillFilter[]{
    const skillFilters=[
      {
        filter:"Programming"
      },
      {
        filter:"Framework"
      },
      {
        filter:"Other"
      },
      {
        filter:"All"
      }
    ]
    return skillFilters;
  }


  getProjects():Project[]{
    const projects = [
      {
        title:"Product Catalogue Backend",
        techStack:["Spring Boot","JPA","MySQL"],
        gitRepo:"repo.git.productcatalogbackend",
        liveUrl:"not available",
        "description":"Created REST APIs for searching products, viewing product details, checking availability, etc. Implemented JWT token based authentication to secure some endpoints. Configured CORS properly."
        
      },
      {
        title:"Product Catalogue Frontend",
        techStack:["Angular","Bootstrap","CSS"],
        gitRepo:"repo.git.productcatalogfrontend",
        liveUrl:"not available",
        "description":"Created a decent frontend for the product catalogue application. Implemented auth guards. Implemented a feature to filter the products based on brands or price range."
        
      },
      {
        title:"React Blog App",
        techStack:["React","Redux"],
        gitRepo:"repo.git.reactblogapp",
        liveUrl:"url.live.reactblogapp",
        "description":"The app allows a user to create, update and delete and like posts. Utilized Redux for state management. Posts get stored in browser's local storage."
      },
      {
        title:"BConnect",
        techStack:["Node JS","Express JS", "EJS", "Socket.io","CSS"],
        gitRepo:"repo.git.bconnect",
        liveUrl:"url.live.bconnect",
        "description":"An end-to-end encryption-based chat app. Users can find one another using their BConnect numbers and save in contact list. Users can talk to online users only. There is no persistence of messages."
      },
      {
        title:"Result Management",
        techStack:["Node JS","Express JS","EJS","CSS","MySQL","Sequelize"],
        gitRepo:"repo.git.resultmanagement",
        liveUrl:"not available",
        "description":"A web application for teachers to create, update and delete results. Students can view their results. Implemented JWT token based authentication and role based authorization."
        
      },
      {
        title:"M-2",
        techStack:["Spring Boot","JPA","MySQL"],
        gitRepo:"repo.git.m2",
        liveUrl:"not available",
        "description":"Created REST APIs."
        
      },
      {
        title:"ANPR",
        techStack:["Python","ML"],
        gitRepo:"repo.git.anpr",
        liveUrl:"not available",
        "description":"Created ANPR system."
        
      },
      {
        title:"BTube",
        techStack:["Angular"],
        gitRepo:"repo.git.btube",
        liveUrl:"not available",
        "description":"Created a frontend application that will work as a video library. The application uses YouTube's API for searching and playing videos."
        
      },
      {
        title:"Bank App/ Microservices POC",
        techStack:["Spring Boot","JPA","H2"],
        gitRepo:"repo.git.bankapp",
        liveUrl:"not available",
        "description":"Created a microservice based application."
        
      }
    ]
    return projects;
  }


  getBites():Bite[]{
    const bites = [
      {
        title:"JPA pagination",
        biteText:"some random text some random text some random text some random text some random text some random text",
        keywords:["pagination","spring data", "jpa"],
        category:"learning",
        timestamp:"2024-02-17 06.30.22",        
      },
      {
        title:"Camunda Message events",
        biteText:"camunda random text camunda random text camunda random text camunda random text",
        keywords:["camunda","bpmn", "message events"],
        category:"learning",
        timestamp:"2024-02-17 08.10.56",        
      },
      {
        title:"json deserialization not working perfectly",
        biteText:"java random text java random text",
        keywords:["json","deserialization"],
        category:"error",
        timestamp:"2024-02-17 06.30.22",        
      },
      {
        title:"code compiled with a higher version of java",
        biteText:"random text here random text here random text here random text here random text here",
        keywords:["compile"],
        category:"error",
        timestamp:"2024-02-17 06.30.22",        
      },
      {
        title:"sending email in spring boot",
        biteText:"some random data for this some random data for this some random data for this some random data for this",
        keywords:["spring","email"],
        category:"learning",
        timestamp:"2024-02-17 06.30.22",        
      }
    ]
    return bites;
  }

}
