// pages/contact.js
import React, { useState } from "react";
import Layout from "../components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a backend API
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <section>
        {/* Contact Page Content */}
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            placeholder="Website"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
