import { NavLink } from 'react-router-dom';
import TitleImage from '../asset/favicon.ico';
import DataBaseImage from '../asset/database.svg';
import DataPreprocessing from '../asset/processing.svg';
import KoverLearnImage from '../asset/kover.svg';
import AnalysisImage from '../asset/analysis.svg';
import "../style/index.css";

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <h1 className='title'><img src={TitleImage} alt="" />GRM</h1>
            <ul>
                <li>
                    
                    <NavLink to="/collection"><img src={DataBaseImage} alt="" />Data collection</NavLink>
                </li>
                <li>
                
                <NavLink to="/preprocessing"><img src={DataPreprocessing} alt="" />Data preprocessing</NavLink></li>
                <li>
                
                <NavLink to="/kover"><img src={KoverLearnImage} alt="" />Kover learn</NavLink></li>
                <li>
                
                <NavLink to="/analysis"><img src={AnalysisImage} alt="" />Analysis</NavLink></li>
                <li className='bottom'><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}