
import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { themeContext } from "../../context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_kgmghx5",
        "template_plevgcg",
        e.target,
        "1kvetvZMvZ8YDnYHJ"
      );
      setSuccessMessage("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccessMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className={`contact-form ${darkMode ? "dark" : ""}`} id='contact'>
      <div className="contact-heading">
        <h2 >Get in Touch</h2>
        <p>Contact me for inquiries or just to say hi!</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form-fields">
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          required
        />
        <button className="i-button" type="submit">Send Message</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
