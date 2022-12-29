import Header from "../../components/Header"
import Footer from "../../components/Footer"
import homeBackground from "../../assets/home_background.jpg"
import HomeCard from "../../components/HomeCard"
import "./index.scss"

import homes from "../../logements.js"

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="cover">
          <h1>Chez vous, partout et ailleurs</h1>
          <img src={homeBackground} alt="home background cover" />
        </div>
        <section className="homeCardsList">
          <ul>
            {homes.map((home) => (
              <li>
                <HomeCard home={home} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
