import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
    return (
        <header className="site-nav">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">Shaun Khang</Link>
                </div>
                <div className="navbar-links main-menu">
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/portfolio" className="nav-link">My Work</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/contact" className="nav-link">Contact Me</Link>
                </div>
                <div className="light_dark_mode main-menu">
                    <p></p>
                </div>
            </nav>
        </header>
    )
}

export default NavBar