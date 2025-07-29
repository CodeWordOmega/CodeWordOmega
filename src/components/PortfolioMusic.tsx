import React, { useEffect, useRef, useState } from 'react';
import AudioToggle from './AudioToggle';
import './AudioToggle.css';

// Path to the game music file in public folder
const PortfolioMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [enabled, setEnabled] = useState(true);

  // Start on scroll
  useEffect(() => {
    const handleScrollStartAudio = () => {
      if (enabled && audioRef.current && audioRef.current.paused) {
        audioRef.current.muted = false;
        audioRef.current.volume = 0.12;
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener('wheel', handleScrollStartAudio);
    };
    window.addEventListener('wheel', handleScrollStartAudio, { once: true });
    return () => window.removeEventListener('wheel', handleScrollStartAudio);
  }, [enabled]);

  // Try to autoplay on mount, fallback to pointer/keydown
  useEffect(() => {
    const tryPlay = () => {
      if (enabled && audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.volume = 0.12;
        audioRef.current.play().catch(() => {});
      }
    };
    tryPlay();
    const resumeAudio = () => {
      tryPlay();
      window.removeEventListener('pointerdown', resumeAudio);
      window.removeEventListener('keydown', resumeAudio);
    };
    window.addEventListener('pointerdown', resumeAudio);
    window.addEventListener('keydown', resumeAudio);
    return () => {
      window.removeEventListener('pointerdown', resumeAudio);
      window.removeEventListener('keydown', resumeAudio);
    };
  }, [enabled]);

  // Pause/resume on tab visibility
  useEffect(() => {
    const handleVisibility = () => {
      if (audioRef.current) {
        if (document.hidden) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        } else if (enabled) {
          audioRef.current.play().catch(() => {});
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [enabled]);
  useEffect(() => {
    const playAudioHandler = () => {
      if (enabled && audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.volume = 0.12;
        audioRef.current.play().catch(() => {});
      }
    };
    window.addEventListener('playPortfolioAudio', playAudioHandler);
    return () => window.removeEventListener('playPortfolioAudio', playAudioHandler);
}, [enabled]);
  // Toggle handler
  const handleToggle = () => {
    setEnabled((prev) => {
      const next = !prev;
      if (audioRef.current) {
        if (next) {
          audioRef.current.muted = false;
          audioRef.current.volume = 0.12;
          audioRef.current.play().catch(() => {});
        } else {
          audioRef.current.pause();
        }
      }
      return next;
    });
  };

  return (
    <>
      <AudioToggle enabled={enabled} onToggle={handleToggle} />
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}starship-game/music/inception-inspired-dark-melodic-techno-mix-night-trains-155050.mp3`}
        autoPlay
        loop
        preload="auto"
        style={{ display: 'none' }}
      />
    </>
  );
};

export default PortfolioMusic;
