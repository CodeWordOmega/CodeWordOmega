import './StarshipGameEmbed.css';

export default function StarshipGameEmbed() {
  const openGame = () => {
    window.open('/starship-game/index.html', '_blank', 'noopener,noreferrer');
  };
  return (
    <section className="starship-embed-section">
      <h2>🚀 Starship Game</h2>
      <div className="starship-embed-wrapper">
        <iframe
          src="/starship-game/index.html?demo=1"
          title="Starship Game Demo"
          className="starship-iframe"
          allowFullScreen
          tabIndex={-1}
        />
      </div>
      <button className="starship-btn" onClick={openGame} style={{marginTop:'1rem'}}>Play Full Game</button>
      <p className="starship-embed-desc">Watch a demo above, or click to play the full game in a new window!</p>
    </section>
  );
}
