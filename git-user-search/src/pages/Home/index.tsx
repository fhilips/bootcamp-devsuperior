import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Desafio Github API</h1>

      <span className="home-subtitle">Bootcamp Spring React - Devsuperior</span>
      <Link to="/gitsearch">
        <button className="btn btn-primary home-btn">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
