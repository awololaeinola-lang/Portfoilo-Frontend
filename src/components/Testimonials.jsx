

import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Eniola is a dedicated and detail-oriented developer. She consistently delivers clean, functional code and shows strong problem-solving skills when working on full-stack applications.",
      name: "Deni-Tech Team Lead",
      company: "Deni-Tech",
    },
    {
      quote:
        "Working with Eniola has been a pleasure. Her technical skills and attention to detail helped our project succeed ahead of schedule.",
      name: "Project Manager",
      company: "TechSolutions Ltd",
    },
    // Add more testimonials if needed
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-quote">“{t.quote}”</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <span className="testimonial-company">{t.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;