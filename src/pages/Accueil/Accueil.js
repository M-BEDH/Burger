import Card from '../../components/Card/Card';
import burgers from '../../data/burger.json';
import { NavLink } from 'react-router-dom';
import './Accueil.css';

function Home() {
  return burgers.map((burger) => (
    <NavLink
      className="AccueilPage"
      key={burger.id}
      to={'/burger/' + burger.id + '/#'}
    >
      <div className="BurgerContainer">
        <Card
          key={burger.id}
          id={burger.id}
          pictures={burger.pictures}
          title={burger.title}
          price={burger.price}
        />
      </div>
    </NavLink>
  ));
}
export default Home;
