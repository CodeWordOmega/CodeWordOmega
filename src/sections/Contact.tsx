import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>📫 Contact</h2>
      <div className="contact-links">
        <a href="mailto:codewordomega@gmail.com" className="contact-btn">Email Me</a>
        <a href="https://www.linkedin.com/in/CodeWordOmega" className="contact-btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p className="contact-footer">Let’s build the future of the web together!</p>
    </section>
  );
}
