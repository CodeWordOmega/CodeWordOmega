import { useState } from 'react';
import './FeaturedProjects.css';

const projects = [
  {
    key: 'blaysloyalty',
    title: 'blaysloyalty.com',
    url: 'https://www.blaysloyalty.com',
    type: 'Web3',
    tech: ['Solana', 'React', 'Web3'],
    img: 'https://blaysloyalty.com/wp-content/uploads/2025/03/GetAttachmentThumbnail.png',
    desc: 'Solana dApp & Loyalty Platform',
    bullets: [
      'Decentralized loyalty rewards on Solana blockchain',
      'Modern, mobile-friendly UI/UX',
      'Secure, scalable, and business-ready',
    ],
  },
  {
    key: 'wholetthecraftsout',
    title: 'wholetthecraftsout.com',
    url: 'https://www.wholetthecraftsout.com',
    type: 'E-commerce',
    tech: ['React'],
    img: 'https://wholetthecraftsout.com/wp-content/uploads/2024/10/WLTCO-Logo.png',
    desc: 'E-commerce Platform',
    bullets: [
      'Custom-built online store',
      'Payment, inventory, and order management',
      'Focus on user experience and automation',
    ],
  },
];

const techFilters = ['All', 'Web3', 'E-commerce', 'Solana', 'React'];

export default function FeaturedProjects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.type === filter || p.tech.includes(filter));
  return (
    <section className="featured-projects">
      <h2>🌟 Featured Projects</h2>
      <div className="project-filters">
        {techFilters.map(f => (
          <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="project-list">
        {filtered.map(project => (
          <div className="project-card" key={project.key}>
            <img src={project.img} alt={project.title} />
            <h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
            <p>{project.desc}</p>
            <ul>
              {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
