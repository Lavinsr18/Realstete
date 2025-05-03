import { useState } from "react";
import "../index.css";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We'll get in touch with you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">We'd love to hear from you.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          required
          onChange={handleChange}
        />
        <input
          type="Mobile"
          name="Mobile"
          placeholder="Your Mobile"
          value={formData.email}
          required
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          required
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default GetInTouch;
