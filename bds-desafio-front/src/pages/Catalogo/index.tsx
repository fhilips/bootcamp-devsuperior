
import './styles.scss';
import {ReactComponent as CarCatalog} from 'assets/images/car-catalog.svg';
import CarCard from './CarCard';

const Catalogo = () => {
  return (
    <section className="catalog-container">
     <div className="base-card busca-card" >
       <input type="text" className="busca-input" placeholder="Digite sua busca" />
       <button className="btn-catalgo-busca base-button">BUSCAR</button>
     </div> 
         
     <CarCard/>
     <CarCard/>
    </section>
  );
};

export default Catalogo;
