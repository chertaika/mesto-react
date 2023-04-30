import headerLogo from "../assets/images/header-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo"
           src={headerLogo}
           alt="логотип Место" />
    </header>
  );
}