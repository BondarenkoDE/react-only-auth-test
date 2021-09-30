import { Link } from 'react-router-dom';

import { WrapperProfile, Welcome, ButtonSignUp } from '../components/Styled';

const Profile = () => {
  const login = localStorage.getItem('login');

  const resetLogin = (): void => {
    localStorage.clear();
  };

  return (
    <WrapperProfile>
      <Welcome>
        Hi, <b>{login}</b>!
      </Welcome>
      <Link to="/login">
        <ButtonSignUp onClick={resetLogin}>Выйти</ButtonSignUp>
      </Link>
    </WrapperProfile>
  );
};

export default Profile;
