import ProfileCard from 'components/ProfileCard';
import { useState } from 'react';
import makeRequest from 'utils/request';
import './styles.scss';

type gitUser = {
  avatar_url: string;
  html_url: string;
  following: number;
  location: string;
  name: string;
};

const GitSearch = () => {
  const [nameSearch, setNameSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [gitUserData, setGitUserData] = useState<gitUser>({
    avatar_url: '',
    html_url: '',
    following: 0,
    location: '',
    name: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameSearch(event.target.value);
    setIsSearch(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    makeRequest({
      url: `/${nameSearch}`,
    })
      .then((response) => {
        setGitUserData(response.data);
       
      })
      .catch(() => {
        setInputError('Usuário não encontrado');
        setIsSearch(false);       
      })
      .finally(() => {
        setIsSearch(true);
      });      
      setInputError('')
  };

  return (
    <div className="search-container">
      <div className="search-card">
        <h1 className="search-title">Encontre um perfil no Github</h1>
        <form className="search-form" action="submit" onSubmit={handleSubmit}>
          <input
            value={nameSearch}
            type="text"
            onChange={handleChange}
            className="search-input"
            placeholder="Usuário Github"
          />
          <div className="search-input-error">{inputError}</div>

          <button className="btn btn-primary search-btn">Encontrar</button>
        </form>
      </div>
      {isSearch && <ProfileCard gitUser={gitUserData} />}
    </div>
  );
};

export default GitSearch;
