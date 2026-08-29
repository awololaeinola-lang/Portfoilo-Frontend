
"use client";

import "./Testimonials.css";
import {
  FaQuoteLeft,
  FaStar,
  FaChalkboardTeacher,
  FaCode,
} from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      icon: FaCode,
      quote:
        "Eniola is a dedicated and detail-oriented developer who approaches every project with a strong desire to learn and improve. Her ability to work across both frontend and backend development makes her a valuable member of a technical team.",
      name: "Deni-Tech Team",
      role: "Development Team",
      company: "Deni-Tech",
    },
    {
      icon: FaChalkboardTeacher,
      quote:
        "Eniola has shown great commitment while working with our students. She explains frontend development in a simple and understandable way, encourages students to ask questions, and creates a learning environment where beginners can confidently explore technology.",
      name: "Htech",
      role: "Frontend Development Program",
      company: "Htech",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">

        {/* Section Header */}
        <div className="testimonials-header">
          <span className="section-label">
            <span></span>
            TESTIMONIALS
          </span>

          <h2>
            What people say{" "}
            <span>about my work.</span>
          </h2>

          <p>
            A few words from people and teams I have had the opportunity
            to work and collaborate with.
          </p>
        </div>

        {/* Testimonials */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;

            return (
              <article
                className="testimonial-card"
                key={index}
              >
                {/* Top Section */}
                <div className="testimonial-top">
                  <div className="quote-icon">
                    <Icon />
                  </div>

                  <div className="testimonial-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="testimonial-quote">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="author-info">
                    <h4>{testimonial.name}</h4>

                    <span>
                      {testimonial.role}
                    </span>

                    <small>
                      {testimonial.company}
                    </small>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;