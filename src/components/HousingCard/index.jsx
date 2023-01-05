import "./index.scss"
import PropTypes from "prop-types"

function HousingCard({ housing }) {
  console.log(housing)
  return (
    <a href={`housing/${housing.id}`} className="housing-card">
      <img src={housing.cover} alt={housing.cover} />
      <p>{housing.title}</p>
    </a>
  )
}

HousingCard.propTypes = {
  home: PropTypes.object,
}

export default HousingCard
