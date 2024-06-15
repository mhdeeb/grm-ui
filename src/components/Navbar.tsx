import ListIcon from '../components/ListIcon';
import TitleIcon from '../asset/favicon.ico';
import DataBaseIcon from '../asset/database.svg';
import DataPreprocessingIcon from '../asset/processing.svg';
import KoverLearnIcon from '../asset/kover.svg';
import AnalysisIcon from '../asset/analysis.svg';
import SettingsIcon from '../asset/settings.svg';
import "../style/index.css";

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '12.5% 0 6.25% 25%',
    "user-select": 'none',
    "font-size": '1.5rem',
    "font-weight": 'bold',
}

const titleImgStyle = {
    width: '2rem',
    height: '2rem',
    marginRight: '10px',
}

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <h1 style={titleStyle}><img style={titleImgStyle} src={TitleIcon} alt="GRM" />GRM</h1>
            <ul>
                <ListIcon to="/collection" src={DataBaseIcon} alt="Data Collection" text="Data Collection"/>
                <ListIcon to="/preprocessing" src={DataPreprocessingIcon} alt="Data preprocessing" text="Data preprocessing"/>
                <ListIcon to="/kover" src={KoverLearnIcon} alt="Kover learn" text="Kover learn"/>
                <ListIcon to="/analysis" src={AnalysisIcon} alt="Analysis" text="Analysis"/>
                <ListIcon className="bottom" to="/settings" src={SettingsIcon} alt="Settings" text="Settings"/>
            </ul>
        </nav>
    );
}