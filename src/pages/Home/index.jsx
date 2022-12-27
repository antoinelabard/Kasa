import Header from "../../components/Header"
import Footer from "../../components/Footer"
import homeBackground from "../../assets/home_background.jpg"

import housings from '../../logements.js'

function Home() {
  
  console.log("housings : " + housings)
  return (
    <div>
      <Header />
      <img src={homeBackground} alt="home background cover" />
      <section>
        <ul>
          {housings.map((housing) => (
            <li>{JSON.stringify(housing)}</li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default Home
