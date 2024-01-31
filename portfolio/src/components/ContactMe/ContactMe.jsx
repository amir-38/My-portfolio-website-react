import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = ({ id }) => {
  return (
    <section id={id} className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./src/assets/github.png"
            text="https://github.com/amir-38"
          />
          <ContactInfoCard
            iconUrl="./src/assets/email.png"
            text="amir.sarukhanov.dev@gmail.com"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
