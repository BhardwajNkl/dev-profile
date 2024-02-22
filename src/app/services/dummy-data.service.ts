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
      "introduction":"A passionate and detail oriented software developer with a Master's degree in computer application and a comprehensive training in Java full stack development. Proven ability to write clean code and implement design patterns effectively.",
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
        description:"I have been using HTML for a long time. And I am quite comfortable with it and can create nicely structured web pages efficiently.",
        category:["language"],
        associatedProjects:["project1","project2","project3"]
      },
      {
        title:"CSS",
        expertise:"Intermediate",
        description:"I have the working knowledge of CSS including properties, selectors, flexbox, grid. I can also design responsive web pages using CSS.",
        category:["language"],
        associatedProjects:["project1","project2"]
      },
      {
        title:"JavaScript",
        expertise:"Experienced",
        description:"My 2nd most favourite programming language. I have a thorough understanding of the language and I have worked with it a lot. Apart from the core JS aspects, I am also used to with object-oriented JS, asynchronous JavaScript, ES6 and JavaScript frameworks.",
        category:["language"],
        associatedProjects:["project1","project2","project3"]
      },
      {
        title:"React",
        expertise:"intermidiate",
        description:"I don't use this very frequently, but I am familiar with it. I have good understanding and practice of React components, routing, hooks, context API, Redux and Middleware.",
        category:["framework"],
        associatedProjects:["project1"]
      },
      {
        title:"Node",
        expertise:"Experience",
        description:"I have done a couple of learning projects using Node and Express. I have a firm grip on Node js programming. I know routing, authentication, authorization, REST APIs, EJS, ORM tools and socket.io, asynchronous javascript etc.",
        category:["framework"],
        associatedProjects:["project1"]
      },
      {
        title:"Angular",
        expertise:"intermidiate",
        description:"It's my favourite front-end framework. I have a good understanding and practice of Angualr components, services, routing, auth guards, lifecycle methods, forms, http client module, etc.",
        category:["framework"],
        associatedProjects:["project1"]
      },
      {
        title:"Java",
        expertise:"Experienced",
        description:"It's my favourite programming language and there is probably no day when I do not use it. Sound knowledge and practice of core java, object-oriented programming, exception handling, multi-threaded programming, file-handling and java 8 & newer fetures.",
        category:["programming"],
        associatedProjects:["project1"]
      },
      {
        title:"Spring",
        expertise:"Intermediate",
        description:"Hands on learning experience covering Spring Core, Spring Data, Spring MVC, Spring Boot, Spring Security. Familiar with related technologies such as Spring cloud, microservices, message queues, monitoring and logging, etc. ",
        category:["framework"],
        associatedProjects:["project1"]
      },
      {
        title:"Hibernate/JPA",
        expertise:"Intermediate",
        description:"Hands on learning experience. Practice of entities, entity relationship mapping, entity fetching, persistence lifecycle and HQL/JPQL.",
        category:["framework"],
        associatedProjects:["project1"]
      },
      {
        title:"Git",
        expertise:"Intermediate",
        description:"Repository initialization, remote repository setup, staging, commit, branching, push, pull, merge, merge conflict handle, pull requests, collaboration and moving to a previous version.",
        category:["tool"],
        associatedProjects:["project1"]
      },
      {
        title:"Jenkins",
        expertise:"beginner",
        description:"setup, job creation, build scheduling, scripting, git repo connection, etc.",
        category:["tool"],
        associatedProjects:["project1"]
      },
      {
        title:"AWS",
        expertise:"beginner",
        description:"VPC, subnets, NACL, EC2, S3 RDS, security groups and Lambda",
        category:["tool"],
        associatedProjects:["project1"]
      },
      {
        title:"Docker",
        expertise:"beginner",
        description:"Getting an image, running, create own image, publishing, docker network and process management by logging into it.",
        category:["tool"],
        associatedProjects:["project1"]
      }

    ]
    return skills;
  }

  getSkillFilters():SkillFilter[]{
    const skillFilters=[
      {
        filter:"all"
      },
      {
        filter:"programming"
      },
      {
        filter:"framework"
      },
      {
        filter:"tool"
      }
    ]
    return skillFilters;
  }


  getProjects():Project[]{
    const projects = [
      {
        title:"product-catalogue-springboot-backend",
        techStack:["spring boot","jpa"],
        gitRepo:"repo.git.project1",
        liveUrl:"not available",
        "description":"This is the backend API of product-catalogue web application project. The key learnings from this project include Spring core, Spring data JPA, Spring web, REST API development, repository design pattern and Spring security with JWT authentication."
        
      },
      {
        title:"react-blog-app",
        techStack:["react"],
        gitRepo:"repo.git.project2",
        liveUrl:"url.url2",
        "description":"A simple app to demonstrate my React learning. The app allows me to create, update and delete posts/notes. Posts get stored in browser's local storage. Posts can be liked too. The key learnings from this project include React components, routing, context API, redux and middleware."
      },
      {
        title:"BConnect",
        techStack:["Node JS","Express JS", "EJS", "Socket.io","CSS"],
        gitRepo:"repo.git.project2",
        liveUrl:"url.url2",
        "description":"An end-to-end encryption-based chat app"
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
