import './Testimonials.css';

export default function Testimonials() {
  // Set to false to hide the section, true to show when ready
  const showTestimonials = false;

  if (!showTestimonials) {
    return null; // Renders nothing, hiding the section
  }

  return (
    <section className="testimonials">
      <h2>💬 Testimonials</h2>
      <div className="testimonial-list">
        <div className="testimonial-card">
          <p>“CodeWordOmega’s blockchain expertise and UI skills took our project to the next level.”</p>
          <span>- Client, Solana dApp</span>
        </div>
        <div className="testimonial-card">
          <p>“Professional, creative, and always delivers on time. Highly recommended!”</p>
          <span>- E-commerce Partner</span>
        </div>
      </div>
    </section>
  );
}