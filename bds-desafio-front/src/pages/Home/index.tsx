import BaseCard from 'components/CarCard';
import './styles.scss';
import { ReactComponent as HomeCar } from 'assets/images/car-home.svg';
const Home = () => {
  return (
    <section className="home-container">
      <div className="base-card home-card">
        <HomeCar className="car-image" />
        <h2 className="home-title">O carro perfeito para você</h2>
        <span className="home-subtitle">
          Conheça nossos carros e dê mais um
          <br /> passo na realização do seu sonho
        </span>
      </div>

      <div className="base-card home-card-secondary">
        <button className="base-button btn-ver-catalogo">VER CATÁLOGO</button>
        <span className="home-card-secondary-text">Comece a navegar</span>
      </div>
    </section>
  );
};

export default Home;
