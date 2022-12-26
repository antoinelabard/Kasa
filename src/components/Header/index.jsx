import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="../../assets/logo.svg" alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/survey">Questionnaire</Link>
      </nav>
    </header>
  );
}

export default Header;
