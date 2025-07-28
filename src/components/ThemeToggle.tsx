import { useTheme } from '../theme';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button className={`theme-toggle ${theme}`} onClick={toggle} aria-label="Toggle dark/light mode">
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
