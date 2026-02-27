
import "./Contact.css";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa"; // Email icon
import api from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/contact", form);
      console.log("SUCCESS RESPONSE:", response.data);
      setStatus("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("AXIOS ERROR:", error.response || error);
      setStatus(
        error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Something went wrong ❌"
      );
    }
  };

  return (
    <section id="contact" className="contact-section" style={{ padding: "70px 20px", textAlign: "center" }}>
      <h2>Get in Touch</h2>

      {/* Contact Info */}
      <div className="contact-info" style={{ marginBottom: "30px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <FaEnvelope size={24} style={{ color: "#2563eb" }} />
        <a href="mailto:awololaeinola@gmail.com" style={{ color: "#2563eb", fontWeight: "bold", textDecoration: "none" }}>
          awololaeinola@gmail.com
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      {status && <p style={{ marginTop: "15px" }}>{status}</p>}
    </section>
  );
}

export default Contact;



