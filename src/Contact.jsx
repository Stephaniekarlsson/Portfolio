import React from "react";
import "./contact.css";

function Contact() {

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section>
      <div className="main-container">
        <h2>Kontakta mig</h2>
        <div className="contact-info">
          <h3 className="contact">Email</h3>
          <a href="mailto:stephaniekarlssonss@gmail.com">stephaniekarlssonss@gmail.com</a>

        </div>
        <div className="contact-info">
          <h3 className="contact">LinkedIn</h3>
          <p className="link" onClick={() =>
            handleClick(
              "https://www.linkedin.com/in/stephanie-karlsson-4b4a7b28a/"
            )
          }>
            LinkedIn Profil
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
