import logo from '../../assets/logo.png';
import * as S from './Nav';

function Nav() {
  return (
    <>
      <S.Nav>
        <img src={logo} alt="logo" />
      </S.Nav>
      <S.Spacer />
    </>
  );
}

export default Nav;
