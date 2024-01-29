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
          <ContactInfoCard iconUrl="./public/assets/icon3.png" text="github" />
          <ContactInfoCard iconUrl="./public/assets/icon3.png" text="mail" />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactMe;
