import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>🔗 How The Blays Loyalty Project Works</h2>
      <div className="how-diagram">
        <img src="https://blaysloyalty.com/wp-content/uploads/2025/03/solana-logo-coin-icon-isolated-vector-43670445.jpg" />
        <div className="how-arrow">→</div>
        <img src="https://blaysloyalty.com/wp-content/uploads/2025/03/GetAttachmentThumbnail.png" alt="dApp" />
        <div className="how-arrow">→</div>
        <img src="https://reactnative.dev/img/header_logo.svg" alt="React" />
      </div>
      <p className="how-caption">Solana blockchain powers the loyalty dApp, which delivers a seamless experience via a modern React frontend.</p>
    </section>
  );
}
