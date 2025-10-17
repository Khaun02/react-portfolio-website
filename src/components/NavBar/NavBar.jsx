import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Shaun Khang</Link>
            </div>
            <div className="navbar-links">
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/portfolio" className="nav-link">My Work</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contact" className="nav-link">Contact Me</Link>
            </div>
        </nav>
    )
}

export default NavBar