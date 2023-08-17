import Burger from '../../components/Burger/Burger';
import './Accueil.css';

function Home() {
  return (
    <div className="pageAccueil">
      <h1 className="page-Acc-Title"> Page d'Accueil </h1>
      <Burger />
    </div>
  );
}

export default Home;
