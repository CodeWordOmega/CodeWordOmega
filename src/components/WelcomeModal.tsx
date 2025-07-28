import React from 'react';
import './WelcomeModal.css';

interface WelcomeModalProps {
  onEnter: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onEnter }) => {
  return (
    <div className="welcome-modal-overlay">
      <div className="welcome-modal">
        <h1>Welcome to CodeWordOmega's Portfolio</h1>
        <p>
          Explore AI-Augmented full stack, Web3, and Solana blockchain projects, achievements, and more.<br />
          Enjoy the interactive experience!
        </p>
        <button className="welcome-enter-btn" onClick={onEnter} autoFocus>
          Enter
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
