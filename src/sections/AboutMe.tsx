import './AboutMe.css';
import SectionDivider from '../components/SectionDivider';

const timeline = [
	{ year: '2025', event: 'Currently enrolled at SNHU (Computer Programming) Completion March 2026' },
	{ year: '2024', event: 'Launched blaysloyality.com (Solana dApp)' },
	{ year: '2023', event: 'Launched wholetthecraftsout.com (E-commerce)' },
	{ year: '2022', event: 'Started building with Web3 & Blockchain' },
	{ year: '2021', event: 'Began full stack development journey' },
];

export default function AboutMe() {
	return (
		<>
			<section className="about-me">
				<h2>👤 About Me</h2>
				<div className="timeline">
					{timeline.map((item, i) => (
						<div className="timeline-item" key={i}>
							<div className="timeline-dot" />
							<div className="timeline-content">
								<span className="timeline-year">{item.year}</span>
								<span className="timeline-event">{item.event}</span>
							</div>
						</div>
					))}
				</div>
				<div className="fun-facts">
					<h3>Fun Facts</h3>
					<ul>
						<li>Solana and Web3 enthusiast</li>
						<li>Love building dApps and e-commerce solutions</li>
						<li>Always learning and exploring new tech</li>
					</ul>
				</div>
			</section>
			<SectionDivider />
		</>
	);
}
