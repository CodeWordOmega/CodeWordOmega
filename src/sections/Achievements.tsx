import { useRef, useEffect } from 'react';
import AnimatedCounter from '../components/AnimatedCounter';
import './Achievements.css';

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.classList.add('fade-in');
  }, []);
  return (
    <section className="achievements fade-in" ref={ref}>
      <h2>🏆 Achievements</h2>
      <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <AnimatedCounter end={2} label=" Platforms Launched" />
        <AnimatedCounter end={1} label=" Courses Ongoing" />
        <AnimatedCounter end={5} label=" Years AI-Augmented Coding" />
      </div>
      <ul>
        <li>Launched two production-ready platforms (Web3 & E-commerce)</li>
        <li>Ongoing education in Computer Programming (SNHU)</li>
        <li>Active contributor to open source and blockchain communities</li>
      </ul>
    </section>
  );
}
