import style from './header.module.css';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
