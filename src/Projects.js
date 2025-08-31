// // src/components/Projects.js
// import React from "react";
// import "./css/Projects.css";

// const projects = [
//   {
//     title: "Full-Stack MERN Food Ordering Platform",
//     description: (
//       <>
//         Engineered a robust food ordering platform with{" "}
//         <b>JWT authentication/authorization</b>, <b>bcrypt security</b>, and
//         distinct <b>user/admin roles</b>. Developed RESTful APIs for user and
//         item CRUD (including <b>Multer image uploads</b>), dynamic cart, order
//         placement, and admin order tracking. Built a responsive React frontend
//         (Hooks, Axios) supporting item discovery (search/filter), cart,
//         checkout, and an admin panel for item/order management. Utilized{" "}
//         <b>MongoDB/Mongoose</b> with efficient schemas, <b>$lookup</b>{" "}
//         aggregations, and <b>Joi</b> server-side validation. Deployed both
//         backend and frontend to Render for scalability and accessibility.
//         <br />
//         <a
//           href="https://foodorderingbackend-v3b3.onrender.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Website
//         </a>{" "}
//         |{" "}
//         <a
//           href="https://github.com/Thapaswini09/FoodOrderingBackend"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           GitHub
//         </a>
//       </>
//     ),
//     tech: "React.js, Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Multer, Joi, Axios, Render",
//   },
//   {
//     title: "Online Expense Tracker",
//     description: (
//       <>
//         Developed a web-based application to help users efficiently manage and
//         monitor expenses. Features include adding, editing, and deleting
//         expenses, categorized summaries for better budgeting, and secure user
//         authentication for personalized tracking. Built using <b>Java</b>,{" "}
//         <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, and
//         deployed on <b>Apache Tomcat</b>. This project highlights backend
//         development, database management, and responsive UI creation.
//       </>
//     ),
//     tech: "Java, MySQL, HTML, CSS, JavaScript, Apache Tomcat",
//   },
//   {
//     title: "Travels & Logistics Booking Automation System",
//     description: (
//       <>
//         Designed and implemented a <b>Java-based application</b> for automating
//         booking operations for a travels and logistics company. The system
//         supports route management, journey planning, rescheduling, and
//         cancellations. Key features include dynamic pricing, secure user
//         authentication with account locking, surge pricing, tax calculations,
//         and an intuitive interface. Utilized <b>Java Collections API</b> for
//         efficient data management, significantly improving process efficiency
//         and security.
//       </>
//     ),
//     tech: "Java, Java Collections API",
//   },
// ];

// const Projects = () => (
//   <section className="projects-section" id="projects">
//     <div className="projects-content">
//       <h2>Projects</h2>
//       <div className="projects-list">
//         {projects.map((project, idx) => (
//           <div className="project-card" key={idx}>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <p>
//               <strong>Tech Stack:</strong> {project.tech}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Projects;

// src/components/Projects.js
import React from "react";
import "./css/Projects.css";

const projects = [
  {
    title: "Full-Stack MERN Food Ordering Platform",
    description: (
      <>
        Engineered a robust food ordering platform with{" "}
        <b>JWT authentication/authorization</b>, <b>bcrypt security</b>, and
        distinct <b>user/admin roles</b>. Developed RESTful APIs for user and
        item CRUD (including <b>Multer image uploads</b>), dynamic cart, order
        placement, and admin order tracking. Built a responsive React frontend
        (Hooks, Axios) supporting item discovery (search/filter), cart,
        checkout, and an admin panel for item/order management. Utilized{" "}
        <b>MongoDB/Mongoose</b> with efficient schemas, <b>$lookup</b>{" "}
        aggregations, and <b>Joi</b> server-side validation. Deployed both
        backend and frontend to Render for scalability and accessibility.
        <br />
        <a
          href="https://foodorderingfrontend-2mix.onrender.com/userlogin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Thapaswini09/FoodOrderingFrontend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Thapaswini09/FoodOrderingBackend"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend GitHub
        </a>
      </>
    ),
    tech: "React.js, Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, Multer, Joi, Axios, Render",
  },
  {
    title: "Online Expense Tracker",
    description: (
      <>
        Developed a web-based application to help users efficiently manage and
        monitor expenses. Features include adding, editing, and deleting
        expenses, categorized summaries for better budgeting, and secure user
        authentication for personalized tracking. Built using <b>Java</b>,{" "}
        <b>MySQL</b>, <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>, and
        deployed on <b>Apache Tomcat</b>. This project highlights backend
        development, database management, and responsive UI creation.
      </>
    ),
    tech: "Java, MySQL, HTML, CSS, JavaScript, Apache Tomcat",
  },
  {
    title: "Travels & Logistics Booking Automation System",
    description: (
      <>
        Designed and implemented a <b>Java-based application</b> for automating
        booking operations for a travels and logistics company. The system
        supports route management, journey planning, rescheduling, and
        cancellations. Key features include dynamic pricing, secure user
        authentication with account locking, surge pricing, tax calculations,
        and an intuitive interface. Utilized <b>Java Collections API</b> for
        efficient data management, significantly improving process efficiency
        and security.
      </>
    ),
    tech: "Java, Java Collections API",
  },
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <div className="projects-content">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
