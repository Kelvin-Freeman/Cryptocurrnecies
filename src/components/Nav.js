import { Link } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
    return(
        // Linking to the desired pages from the Nav Bar
        <div className="nav">
            <Link to="/">
                <div>CRYPTO PRICES</div>
            </Link>

            <Link to="/currencies">
                <div>Currencies</div>
            </Link>
        </div>
    )
}

export default Nav