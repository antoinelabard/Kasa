import './index.scss'
import PropTypes from 'prop-types'

function HomeCard({home}) {
    return (
        <a href={`housing/${home.id}`} className="homeCard">
            <img src={home.cover} alt={home.cover} />
            <p>{home.title}</p>
        </a>
    )
}

HomeCard.propTypes = {
    home: PropTypes.object
}

export default HomeCard
