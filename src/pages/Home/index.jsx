import Header from "../../components/Header"
import Footer from "../../components/Footer"
import homeCover from "../../assets/home_cover.jpg"
import HousingCard from "../../components/HousingCard"
import Repository from "../../data/Repository"
import "./index.scss"

function Home() {
  const housings = new Repository().getHousings()
  return (
    <div>
      <div className="wrapper">
        <Header />
        <main>
          <div className="home-cover">
            <h1>Chez vous, partout et ailleurs</h1>
            <img src={homeCover} alt="home background cover" />
          </div>
          <section className="housing-cards-list">
            <ul>
              {housings.map((housing) => (
                <li key={housing.id}>
                  <HousingCard housing={housing} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Home
