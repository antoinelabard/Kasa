import Header from "../../components/Header"
import Footer from "../../components/Footer"
import homeCover from "../../assets/home_cover.jpg"
import HomeCard from "../../components/HomeCard"
import "./index.scss"

import homes from "../../logements.js"

function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="home-cover">
          <h1>Chez vous, partout et ailleurs</h1>
          <img src={homeCover} alt="home background cover" />
        </div>
        <section className="homeCardsList">
          <ul>
            {homes.map((home) => (
              <li key={home.id}>
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
