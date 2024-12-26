import { Smiley, Github } from '../icons';

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <a href="#" className="navigation__brand">
        <Smiley />
        <span>Acid Archive</span>
      </a>

      <div className="navigation__menu"></div>

      <div className="navigation__actions">
        <a
          className="button"
          href="https://github.com/acidarchive"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          github
        </a>
      </div>
    </nav>
  );
};
