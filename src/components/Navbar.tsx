import ListIcon from '../components/ListIcon';
import TitleIcon from '../asset/favicon.ico';
import DataBaseIcon from '../asset/database.svg';
import DataPreprocessingIcon from '../asset/processing.svg';
import KoverLearnIcon from '../asset/kover.svg';
import AnalysisIcon from '../asset/analysis.svg';
import SettingsIcon from '../asset/settings.svg';
import "../style/index.css";

const titleStyle: any = {
    display: 'flex',
    alignItems: 'center',
    margin: '12.5% 0 12.5% 25%',
    userSelect: 'none'
}

const titleImgStyle: any = {
    width: '2rem',
    height: '2rem',
    marginRight: '15px',
}

const FlexSpacer = () => <div style={{flex: '1'}}></div>;

export default function Navbar() {
    return (
        <nav className="nav-bar">
            <h1 style={titleStyle}><img draggable="false" style={titleImgStyle} src={TitleIcon} alt="GRM" />GRM</h1>
            <ul className='nav-content'>
                <ListIcon to="/collection" src={DataBaseIcon} alt="Data Collection" text="Data Collection"/>
                <ListIcon to="/preprocessing" src={DataPreprocessingIcon} alt="Data preprocessing" text="Data preprocessing"/>
                <ListIcon to="/kover" src={KoverLearnIcon} alt="Kover learn" text="Kover learn"/>
                <ListIcon to="/analysis" src={AnalysisIcon} alt="Analysis" text="Analysis"/>
                <FlexSpacer />
                <ListIcon to="/settings" src={SettingsIcon} alt="Settings" text="Settings"/>
            </ul>
        </nav>
    );
}