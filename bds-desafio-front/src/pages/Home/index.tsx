
import { ReactComponent as HomeCar } from 'assets/images/car-home.svg';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => {
  return (
    <section className="home-container">
      <div className="base-card home-card">
        <HomeCar className="car-image" />
        <div className="home-card-content">
          <h2 className="home-title">O carro perfeito para você</h2>
          <span className="home-subtitle">
            Conheça nossos carros e dê mais um
            <br /> passo na realização do seu sonho
          </span>
        </div>
      </div>

      <div className="base-card home-card-secondary">
        <button className="base-button btn-ver-catalogo">
          <Link to="/catalogo">VER CATÁLOGO</Link> 
        </button>
        <div className="home-card-secondary-text-container">
          <span className="home-card-secondary-text">
            Comece agora a navegar
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
