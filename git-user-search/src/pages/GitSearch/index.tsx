import ProfileCard from 'components/ProfileCard';
import './styles.scss';

const GitSearch = () => {
  return (
    <div className="search-container">
      <div className="search-card">
        <h1 className="search-title">Encontre um perfil no Github</h1>
        <input type="text" className="search-input" placeholder="Usuário Github"/>
        <button className="btn btn-primary search-btn">Encontrar</button>
      </div>

      <ProfileCard name="nome"/>
    </div>
  );
};

export default GitSearch;
