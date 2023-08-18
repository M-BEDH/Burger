import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1 className="headerTitle">New Big Burger</h1>
      <nav id="navigation">
        <ul>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'active' : ' ')}
          >
            <li className="accueil">Accueil</li>{' '}
          </NavLink>

          <NavLink
            to={'/a-propos/'}
            className={({ isActive }) => (isActive ? 'active' : ' ')}
          >
            <li className="a-propos">A Propos</li>{' '}
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
