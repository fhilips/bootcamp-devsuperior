import { Link } from 'react-router-dom';
import './styles.scss';

type gitUser = {
  avatar_url: string,
  html_url: string,
  following: number,
  location: string,
  name: string
}
type Props = {
  gitUser: gitUser
}

const ProfileCard = ({gitUser}: Props) => {  
  return (
    <div className="profile-container">
      <div className="profile-card">        
        <img className="profile-image" src={gitUser.avatar_url} alt="Foto do perfil do Github" />  
      
        <div className="profile-info-card">
          <h3 className="profile-info-title">Informações</h3>
          <span className="profile-info-content">
            Perfil: 
            <div className="git-info-response">{gitUser.html_url}</div>
          </span>
          <span className="profile-info-content">
            Seguidores: 
            <div className="git-info-response">{gitUser.following}</div>
          </span>
          <span className="profile-info-content">
            Localidade:
            <div className="git-info-response">{gitUser.location}</div>
          </span>
          <span className="profile-info-content">
            Nome:
            <div className="git-info-response">{gitUser.name}</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
