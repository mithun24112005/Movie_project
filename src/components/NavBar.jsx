import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav brand">
                <Link to="/"><img src="/logo.png" alt="" className="applogo" /></Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}

export default NavBar