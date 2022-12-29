import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import './index.scss'

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <Link class="navLink" to="/">Accueil</Link>
        <Link class="navLink" to="/about">À propos</Link>
      </nav>
    </header>
  )
}

export default Header
