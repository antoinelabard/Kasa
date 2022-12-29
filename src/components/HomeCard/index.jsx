import './index.scss'

function HomeCard({home}) {
    return (
        <div className="homeCard">
            <img src={home.cover} alt={home.cover} />
            <p>{home.title}</p>
        </div>
    )
}

export default HomeCard
