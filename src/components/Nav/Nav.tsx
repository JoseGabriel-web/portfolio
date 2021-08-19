import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="nav-logo-wrapper">
        <h2 className="nav-logo">JGMG</h2>
      </Link>
      <div className="nav-listWrapper">
        <ul className="nav-list">
          <Link to="/" className="nav-list-item">
            <h3>about</h3>
          </Link>
          <Link to="/" className="nav-list-item">
            <h3>projects</h3>
          </Link>
          <Link to="/" className="nav-list-item">
            <h3>contact</h3>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
