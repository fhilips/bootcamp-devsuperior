import './styles.scss';
import { ReactComponent as CarCatalog } from 'assets/images/car-catalog.svg';
import CarCard from './CarCard';

const Catalogo = () => {
  return (
    <section className="catalog-container">
      <div className="base-card busca-card">
        <input
          type="text"
          className="busca-input"
          placeholder="Digite sua busca"
        />
        <button className="btn-catalgo-busca base-button">BUSCAR</button>
      </div>
      <div className="car-cards-container">
        <div className="container my-4">
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-4">
              <CarCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogo;
