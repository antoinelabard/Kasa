import './index.scss'
import PropTypes from 'prop-types'

function HomeCard({home}) {
    return (
        <div className="homeCard">
            <img src={home.cover} alt={home.cover} />
            <p>{home.title}</p>
        </div>
    )
}

HomeCard.propTypes = {
    home: PropTypes.object
}

export default HomeCard
