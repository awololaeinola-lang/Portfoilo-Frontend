import "./Contact.css";
import { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaArrowRight,
  FaPaperPlane,
} from "react-icons/fa";
import api from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await api.post("/api/contact", form);

      console.log("SUCCESS RESPONSE:", response.data);

      setStatus("Message sent successfully! I'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("AXIOS ERROR:", error.response || error);

      setStatus(
        error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="contact-header">

          <span className="contact-label">
            <span></span>
            GET IN TOUCH
          </span>

          <h2>
            Let's build something{" "}
            <span>great together.</span>
          </h2>

          <p>
            Have a project in mind, an idea you want to bring to life,
            or simply want to say hello? I'd love to hear from you.
          </p>

        </div>


        {/* =================================================
            CONTACT CONTENT
        ================================================= */}

        <div className="contact-content">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="contact-details">

            <h3>
              Have a project in mind?
            </h3>

            <p>
              Whether you're looking to build a website, develop a
              web application, or improve an existing digital product,
              feel free to reach out.
            </p>


            {/* Email */}

            <a
              href="mailto:awololaeinola@gmail.com"
              className="contact-method"
            >

              <div className="contact-method-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email me</span>
                <strong>
                  awololaeinola@gmail.com
                </strong>
              </div>

              <FaArrowRight className="contact-method-arrow" />

            </a>


            {/* WhatsApp */}

            <a
              href="https://wa.me/2349069190561"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method"
            >

              <div className="contact-method-icon">
                <FaWhatsapp />
              </div>

              <div>
                <span>Chat with me</span>
                <strong>
                  WhatsApp
                </strong>
              </div>

              <FaArrowRight className="contact-method-arrow" />

            </a>


            {/* Availability */}

            <div className="contact-availability">

              <span className="availability-dot"></span>

              <div>
                <strong>
                  Available for new projects
                </strong>

                <p>
                  Usually responds within 24 hours.
                </p>
              </div>

            </div>

          </div>


          {/* =================================================
              FORM
          ================================================= */}

          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a little about your project..."
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  required
                />

              </div>


              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >

                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}

              </button>


              {status && (
                <p className="contact-status">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;