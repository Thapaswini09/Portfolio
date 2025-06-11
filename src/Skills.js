import React from "react";
import "./css/Skills.css";

const skills = [
  "Java",
  "JavaScript",
  "React.js",
  "HTML",
  "CSS",
  "SQL",
  "Node.js (basic)",
  "Git & GitHub",
  "REST APIs",
  "Responsive Design",
];

const Skills = () => (
  <section className="skills-section" id="skills">
    <div className="skills-content">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
