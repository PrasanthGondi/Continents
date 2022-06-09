import {Link} from "react-router-dom"
import "./HomeFile.css"

const HomeFile = () => {
    return(<div className="HomeDiv">
        <h1 className="HomeHead">Welcome to Continent Data Displayer</h1>
        <p className="HomePara">The Button Below will take you to Displayer</p>
        <Link to="/select"><button className="HomeButton">Go to Displayer</button></Link>
    </div>)
}

export default HomeFile