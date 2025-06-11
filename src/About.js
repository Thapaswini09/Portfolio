import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I’m <span className="highlight">Thapaswini Vanukuri</span>, an
          aspiring Full Stack Developer with a strong foundation in Java,
          JavaScript, React.js, HTML, CSS, and SQL. I graduated in 2023 with a
          degree in Computer Science and engineering, and I’m passionate about
          building interactive, user-friendly web applications.
        </p>
        <p>
          I enjoy solving real-world problems through code and am always eager
          to learn new technologies. My portfolio showcases projects that
          demonstrate my skills in both front-end and back-end development. I am
          looking forward to starting my professional journey and contributing
          to innovative teams.
        </p>
        <ul className="about-list">
          <li>
            <strong>Degree:</strong> Bachelor of technology in Computer Science
            and Engineering
          </li>
          <li>
            <strong>Graduation Year:</strong> 2023
          </li>
          <li>
            <strong>Email:</strong> thapaswini.vanukuri@gmail.com
          </li>
          <li>
            <strong>Location:</strong> Bengaluru, India
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
