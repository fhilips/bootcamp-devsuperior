import { ReactComponent as CarCatalog } from 'assets/images/car-catalog.svg';
import './styles.scss';

const CarCard = () => {
  return (
    <div className="base-card card-car-container">
      <CarCatalog className="car-card-image" />
      <h3 className="car-card-title">Audi Supra TT</h3>
      <div className="card-car-text-container">
        <span className="car-card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </span>
      </div>
      <button className="base-button btn-comprar-carro">COMPRAR</button>
    </div>
  );
};

export default CarCard;
