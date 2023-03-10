import Footer from "../../components/Footer"
import Header from "../../components/Header"
import "./index.scss"

function NotFound() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <main className="notFound">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <a href="/">Retourner à la page d'accueil</a>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
