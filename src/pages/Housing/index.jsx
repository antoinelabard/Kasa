import { useParams } from "react-router-dom"
import Carousel from "../../components/Carousel"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Repository from "../../data/Repository"
import NotFound from "../NotFound"
import Chip from "../../components/Chip"
import Hero from "../../components/Hero"
import Rating from "../../components/Rating"
import CollapseCard from "../../components/CollapseCard"
import "./index.scss"

function Housing() {
  const { id } = useParams()
  const housing = new Repository().getHousingById(id)
  if (!housing) {
    return <NotFound />
  }
  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
          <Carousel housing={housing} />
          <section className="housing-info">
            <div className="housing-info__general">
              <h1>{housing.title}</h1>
              <h2>{housing.location}</h2>
              <div className="tags">
                {housing.tags.map((tag, index) => (
                  <Chip key={`${tag}-${index}`} text={tag} />
                ))}
              </div>
            </div>
            <div className="housing-info__host">
              <Hero host={housing.host} />
              <Rating rating={housing.rating} />
            </div>
          </section>
          <section className="housing-description">
            <CollapseCard
              title="Description"
              description={housing.description}
            />
            <CollapseCard
              title="Équipements"
              description={
                <ul>
                  {housing.equipments.map((equipment, index) => (
                    <li key={`${equipment}-${index}`}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Housing
