import React from "react";
import "./css/Home.css";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <img
          src={process.env.PUBLIC_URL + "/images/image.jpg"}
          alt="Tour"
          className="profile-photo"
        />
        <h1>
          Hello, I'm <span className="highlight">Thapaswini Vanukuri</span>
        </h1>
        <h2>Aspiring Full Stack Developer</h2>
        <p>
          I’m passionate about building responsive and user-friendly web
          applications using Java, JavaScript, React.js, HTML, CSS, and SQL. I’m
          eager to contribute to innovative teams and kickstart my professional
          journey!
        </p>
        <a href="#projects" className="cta-button">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
