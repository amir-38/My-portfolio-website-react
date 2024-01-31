import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import gitLogo from "../../assets/github.png";
import mailLogo from "../../assets/email.png";
const ContactMe = ({ id }) => {
  return (
    <section id={id} className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={gitLogo}
            text="https://github.com/amir-38"
          />
          <ContactInfoCard
            iconUrl={mailLogo}
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
