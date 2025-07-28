import './Education.css';

export default function Education() {
  return (
    <section className="education">
      <h2>📚 Education</h2>
      <ul>
        <li>
          <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
            Southern New Hampshire University (SNHU) — Computer Programming (2025)
          </span>
          <ul>
            <li style={{ listStyle: 'none' }}>
              <strong>Areas of Study:</strong>
            </li>
            <li>Introduction to Scripting</li>
            <li>Foundation in Application Development</li>
            <li>Programming Languages</li>
            <li>Software Development Lifecycle</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}