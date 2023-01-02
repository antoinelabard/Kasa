import { useParams } from "react-router-dom"
import Carousel from "../../components/Carousel"
import homes from '../../logements.js'

function Housing() {
    const {id} = useParams()
    console.log(id)
    return (
        <div>Housing</div>
    )
}

export default Housing
