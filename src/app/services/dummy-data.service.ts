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
      // "introduction":["Hi there! I am a Fullstack Developer with a master’s degree in computer application, supported by a rigorous training and extensive hands-on experience. I have a strong foundation in Java, JavaScript and SQL languages.",
      //   "I specialize in developing backend solutions using Spring Boot and creating engaging frontend experiences with Angular. I am proficient in working with relational databases and writing efficient SQL queries. Additionally, my experience with JPA/Hibernate enables me to handle data management seamlessly. I can secure applications using Spring Security and I can also write unit & integration tests that ensures the quality and reliability of my code.",
      //   "Please explore my portfolio to see the projects I have worked on during my training and personal endeavors. I am eager to bring my skills to real-world projects and am confident in my ability to contribute effectively as a collaborative team person."
      // ],
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
      // favourites
      {
        title:"HTML CSS & JS",
        expertise:"Intermediate",
        description:"Proficient in creating responsive and interactive websites using HTML, CSS, and JavaScript. Able to create decent design using CSS. Strong Foundation in JavaScript.",
        category:["favourites"],
        keyWords:["Responsive Websites", "ES6","Asynchronous JS", "DOM", "JS APIs"],
      },
      {
        title:"Java",
        expertise:"Interediate",
        description:"Proficient in Java with extensive hands-on experience. Skilled in object-oriented programming, collections, exception handling, and multithreading.",
        category:["favourites"],
        keyWords:["Java 8"],
      },

      {
        title:"RDBMS",
        expertise:"Intermediate",
        description:"Good at designing and working with MySQL databases. Skilled in writing queries and optimizing database performance.",
        category:["Favourites"],
        keyWords:["SQL"],
      },
      {
        title:"Spring Boot",
        expertise:"Basic",
        description:"Proficient in developing backend solutions using Spring Boot. Skilled in building RESTful APIs, creating data access layer and securing the application using Spring Security.",
        category:["favourites"],
        keyWords:["JPA", "Security", "Unit tests", "Bean validation" ,"Exception handling", "AOP"],
      },
      {
        title:"JPA/Hibernate",
        expertise:"Basic",
        description:"Proficient in using JPA with Hibernate for ORM. Skilled in domain modelling, converting the model into JPA entities and mappings. I can utilize JPA's finder methods as well as write my own efficient queries.",
        category:["favourites"],
        keyWords:["CRUD", "Paging", "Sorting"],
      },
      {
        title:"Unit Testing",
        expertise:"Basic",
        description:"Skilled in writing unit and integration tests using JUnit5, Mockito and MockMVC. With finely written tests, I ensure code quality and reliability.",
        category:["favourites"],
        keyWords:[],
      },
      {
        title:"Angular",
        expertise:"Basic",
        description:"Angular is my favourite frontend framework. Skilled in building components, services, and integrating RESTful APIs to create efficient frontend applications.",
        category:["favourites"],
        keyWords:["Form Validaion", "Interceptor","Guard"],
      },

      {
        title:"Git",
        expertise:"Intermediate",
        description:"Hands-on practice. Experienced with repository initialization, remote repository setup, branching, push, pull, merge, merge conflict handling and collaboration.",
        category:["Favourites"],
        keyWords:[],
      },
      {
        title:"Jenkins",
        expertise:"Basic",
        description:"Familiar with job creation, build scheduling, scripting, SCM setup, etc. Can build pipelines for smooth CI/CD.",
        category:["Favourites"],
        keyWords:[],
      },

      {
        title:"Docker and Kubernates",
        expertise:"Basic",
        description:"Hands-on learning through a couple of projects. Can write dockerfile, docker-compose file, build images and deploy applications on Kubernetes clusters.",
        category:["Favourites"],
        keyWords:[]
      },

      // other
      {
        title:"React",
        expertise:"Basic",
        description:"Hands on learning experience. Experienced with components, routing, props, hooks, context API and Redux.",
        category:["other"],
        keyWords:[],
      },
      {
        title:"Express JS",
        expertise:"Basic",
        description:"I have done a couple of learning projects. Experienced with routing, authentication, authorization, REST APIs, EJS and Sequelize ORM.",
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
        title:"AWS",
        expertise:"Basic",
        description:"Familiar with EC2, S3, RDS, Lambda, Security groups, VPC, subnets and NACLs. Can deploy applications on EC2 or Elastic Beanstalk.",
        category:["other"],
        keyWords:[],
      },
      
       {
        title:"Design Patterns",
        expertise:"Basic",
        description:"Familiar with commonly used design patterns. Can identify use cases and apply the patterns effectively.",
        category:["other"],
        keyWords:[]
      },
      
      // {
      //   title:"Microservices",
      //   expertise:"Basic",
      //   description:"Can implement different services, discovery server, inter-service communications, API gateway and centralized configurations. Familiar with exception handling mechanisms such as fallback and circuit-breaker patterns. ",
      //   category:["other"],
      // },

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
        title:"Product Catalogue",
        techStack:["Maven","Spring Boot","JPA","Spring Security","MySQL","Angular", "CSS", "Bootstrap"],
        gitRepo:"https://github.com/BhardwajNkl/product-catalogue-springboot-backend",
        liveUrl:null,
        // "description":"Created REST APIs for searching products, viewing product details, checking availability, etc. Implemented JWT token based authentication to secure some endpoints. Configured CORS properly."
        // description:"Developed a product catalogue application featuring RESTful APIs for user registration, login, product search, detailed product views, and availability checks. Secured specific endpoints with JWT token-based authentication, ensuring secure user interactions."
        description:"Developed a product catalogue web application featuring RESTful APIs for user registration, login, product search, detailed product views, and availability checks. Secured specific endpoints with JWT token-based authentication, ensuring secure user interactions. Designed and implemented a user-friendly frontend using Angular, including features like auth guards for protected routes and filtering products by brand or price range, enhancing user experience and application security",
        seniorRating:"9.7/10"
      },
      {
        title:"Online Food Ordering System",
        techStack:["Maven","Spring Boot","JPA","MySQL", "Spring Security"],
        gitRepo:"https://github.com/BhardwajNkl/online-food-ordering-system",
        liveUrl:null,
        description:"Developed an online food ordering system with RESTful APIs, enabling admins to register and manage restaurants and their dishes. Customers can register, login, view restaurant and dish details, place orders, and receive bills. Additionally, customers can rate and review dishes after ordering. The system includes features for searching dishes by cuisine and sorting them by rating. Implemented Spring Security for robust authentication and role-based authorization, ensuring secure access for both admins and customers.",
        seniorRating:"4/5"
      },

      {
        title:"Notes Management",
        techStack:["Maven","Spring Boot","JPA","MySQL", "Spring Security"],
        gitRepo:null,
        liveUrl:null,
        "description":"I developed a Notes Management System that allows users to securely store and manage their personal notes. Upon logging in, users can access their 10 most recent notes, while older notes are automatically deleted every hour. This feature was implemented as a learning exercise to explore task scheduling. The application supports full CRUD functionality, allowing users to create, view, and delete notes. Input validation ensures that notes include only specific special characters [@, ; & * + -] and are limited to 500 characters. The system is designed with a clean, intuitive interface for a seamless user experience.",
        seniorRating:"4/5"
      },

      {
        title:"Result Management",
        techStack:["Express JS","EJS","CSS","MySQL","Sequelize","NPM"],
        gitRepo:"https://github.com/BhardwajNkl/node-JS-result-management",
        liveUrl:null,
        // "description":"A web application for teachers to create, update and delete results. Students can view their results. Implemented JWT token based authentication and role based authorization."
        description:"In this project, I developed a web application using Express.js, designed to manage student results. The app supports two types of users: teachers and students. After logging in, teachers have the ability to create, update, and delete student results. Students, on the other hand, can log in to view their individual results. This project allowed me to gain practical experience with Express.js, user authentication, and role-based access control.",
        seniorRating:"5/5"
      },

      {
        title:"Blog App",
        techStack:["React","Redux","Bootstrap","CSS","NPM"],
        gitRepo:"https://github.com/BhardwajNkl/react-blog-app",
        liveUrl:null,
        // "description":"The app allows a user to create, update, delete and like notes. Utilized Redux for state management. The app uses browser's local storage for persistence."
        description:"In this project, I developed a simple blogging application using React.js. The app allows users to create, view, update, and delete posts, with all data stored locally in the browser's localStorage. Key features include the ability to click on a post to view its detailed content, edit the post, and delete it if needed. This project helped me deepen my understanding of React components, state management, and localStorage.",
        seniorRating:"4.2/5"
      },
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
      {
        title:"Microservices Project",
        techStack:["Maven", "Spring Boot", "Spring Cloud", "JPA","H2 in-memory database"],
        gitRepo:null,
        liveUrl:null,
        description:"I designed and implemented a microservices-based system using Spring Boot to explore microservices architecture. The project features two services: Customer Management and Account Management. The Customer Management service handles customer data, including adding, retrieving, updating, and deleting customers, with the added functionality that deleting a customer also removes their associated account. The Account Management service manages account operations such as deposit, withdrawal, retrieving account details, and deleting accounts, with validation of customer details for transactions. The system utilizes Eureka Server for service discovery, an API Gateway, and a Config Server for centralized configuration. This project helped me learn designing microservices systems.",
        seniorRating:"4/5"
      },

      {
        title:"Contact App for Android",
        techStack:["React Native","SQLite","Android Studio"],
        gitRepo:null,
        liveUrl:null,
        "description":"I developed a Contacts Management App for Android using React Native, providing users with a seamless way to store, view, and manage their contacts. The app features an intuitive interface where users can easily add new contacts, edit existing ones, and delete those they no longer need. Contacts are securely saved in a local SQLite database, ensuring data persistence even when the app is closed. The app also includes a search feature, allowing users to quickly find specific contacts. Additionally, there is a dedicated screen for favorite contacts, enabling users to access their most important contacts with ease.",
        seniorRating:"3/5"
      },

      {
        title:"Personal Task Manager",
        techStack:["HTML5", "CSS3", "JavaScript"],
        gitRepo:"https://github.com/BhardwajNkl/task-manager",
        liveUrl:null,
        description:"I developed a dynamic Todo Management application utilizing HTML5, CSS3, and JavaScript. The app features an 'Add Task' button that opens a form for users to input task details. Leveraging the drag-and-drop API, users can seamlessly move tasks between different states like 'To-Do', 'Doing' and 'Done'. The app is fully responsive, adapting to all screen sizes to ensure an optimal user experience.",
        seniorRating:"4/5"
      },
      {
        title:"ANPR system",
        techStack:["Python","YOLOv8"],
        gitRepo:null,
        liveUrl:null,
        "description":"Created a system to automatically recognise and read number plates of vehicles. The system saves the detected vehicle numbers in a database.",
        seniorRating:null 
      },      
    ]
    return projects;
  }

}
