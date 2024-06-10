import { Link } from 'react-router-dom';
import favicon from '../asset/favicon.ico';
import "../style/index.css";

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <img src={favicon} alt="Icon" id="nav-icon"/>
            <h2>Test Website</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/social">Social</Link></li>
            </ul>
        </nav>
    );
}