import "./index.scss"

function Hero({ host }) {
  return (
    <div className="hero">
      <p>{host.name}</p>
      <img src={host.picture} alt="user profile picture" />
    </div>
  )
}

export default Hero
