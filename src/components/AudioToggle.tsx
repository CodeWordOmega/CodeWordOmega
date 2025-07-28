import React, { useState } from 'react';
import './AudioToggle.css';

interface AudioToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

const AudioToggle: React.FC<AudioToggleProps> = ({ enabled, onToggle }) => {
  return (
    <button
      className={`audio-toggle${enabled ? '' : ' off'}`}
      onClick={onToggle}
      aria-label={enabled ? 'Mute background music' : 'Unmute background music'}
    >
      {enabled ? '🔊' : '🔇'}
    </button>
  );
};

export default AudioToggle;
