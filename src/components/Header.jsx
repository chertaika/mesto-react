import headerLogo from '../assets/images/header-logo.svg';

const Header = () => (
  <header className="header">
    <img
      className="header__logo"
      src={headerLogo}
      alt="логотип Место"
    />
  </header>
);

export default Header;
