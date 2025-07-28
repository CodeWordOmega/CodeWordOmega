import './Skills.css';

export default function Skills() {
  return (
    <section className="skills">
      <h2>🛠️ Skills</h2>
      <div className="skills-icons">
        <img src="https://skillicons.dev/icons?i=js,ts,react,nodejs,solidity,solana,web3,mongodb,express,html,css" alt="Skill Icons" />
      </div>
      <ul className="skills-list">
        <li>JavaScript / TypeScript</li>
        <li>React, Node.js, Express</li>
        <li>Solana, Web3, Solidity</li>
        <li>MongoDB, SQL</li>
        <li>HTML5, CSS3, Responsive Design</li>
        <li>API Design & Integration</li>
        <li>Modern DevOps & CI/CD</li>
        <li>Prompt Engineering</li>
      </ul>
    </section>
  );
}
