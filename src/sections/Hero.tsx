import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <svg className="hero-bg-anim" width="100%" height="100%" viewBox="0 0 900 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffa3" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <ellipse cx="450" cy="150" rx="400" ry="120" fill="url(#grad1)">
          <animate attributeName="rx" values="400;420;400" dur="6s" repeatCount="indefinite" />
          <animate attributeName="ry" values="120;140;120" dur="6s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="450" cy="180" rx="200" ry="60" fill="#00ffa344">
          <animate attributeName="rx" values="200;220;200" dur="8s" repeatCount="indefinite" />
          <animate attributeName="ry" values="60;80;60" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      <img className="hero-logo" src={`${import.meta.env.BASE_URL}omega-logo.png`} alt="Omega Logo" />
      <h1>CodeWordOmega</h1>
      <p className="hero-real-name">(Jeffrey Lawson)</p>
      <h2>AI-Augmented Full Stack Developer | Web3 & Solana Blockchain</h2>
      <p className="hero-tagline">Building the next generation of decentralized and e-commerce solutions.</p>
      <a className="hero-cta" href="https://www.linkedin.com/in/CodeWordOmega" target="_blank" rel="noopener noreferrer">Let’s Connect</a>
    </section>
  );
}