// src/components/Contact.js
import React from "react";
import "./css/Contact.css";

const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="contact-content">
      <h2>Contact</h2>
      <p>
        Interested in working together, or want to connect? <br />
        Feel free to reach out!
      </p>
      <div className="contact-links">
        <a href="mailto:thapaswini.vanukuri@gmail.com">
          <i className="fas fa-envelope" style={{ color: "#1E90FF" }}></i>{" "}
          thapaswini.vanukuri@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/thapaswini-vanukuri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" style={{ color: "#0A66C2" }}></i>{" "}
          LinkedIn
        </a>
        <a
          href="https://github.com/Thapaswini09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={{ color: "#171515" }}></i> GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
