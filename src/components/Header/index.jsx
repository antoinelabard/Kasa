import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import './index.scss'

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <Link className="navLink" to="/">Accueil</Link>
        <Link className="navLink" to="/about">À propos</Link>
      </nav>
    </header>
  )
}

export default Header
