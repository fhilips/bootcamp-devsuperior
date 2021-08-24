import './styles.scss';
type Props = {
  name: String;
};

const ProfileCard = ({ name }: Props) => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image" />

        <div className="profile-info-card">
          <h3 className="profile-info-title">Informações</h3>
          <span className="profile-info-content">
            Perfil:
            <div className="git-info-response">https://api.github.com/users/acenelio</div>
          </span>
          <span className="profile-info-content">
            Seguidores: 
            <div className="git-info-response">4379</div>
          </span>
          <span className="profile-info-content">
            Localidade:
            <div className="git-info-response">Uberlândia</div>
          </span>
          <span className="profile-info-content">
            Nome:
            <div className="git-info-response">Nelio Alves</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
