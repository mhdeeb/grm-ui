import TitleIcon from '../asset/favicon.ico';
import DataBaseSVG from '../components/svg/DatabaseSVG';
import DataPreprocessingSVG from '../components/svg/ProcessingSVG';
import KoverLearnSVG from '../components/svg/KoverSVG';
import AnalysisSVG from '../components/svg/AnalysisSVG';
import SettingsSVG from '../components/svg/SettingsSVG';
import ListLink from './ListLink';
import { Flex, List, Spacer, useStyleConfig } from '@chakra-ui/react';

export default function Navbar() {
    const titleStyle: any = {
        display: 'flex',
        alignItems: 'center',
        padding: "2rem 0rem 2rem 4rem",
        boxShadow: '2px 0px 2px black',
        borderBottom: "1px solid grey",
        userSelect: 'none',
        fontSize: '1.5rem',
        fontWeight: 600,
    }

    const titleImgStyle: any = {
        width: '2rem',
        height: '2rem',
        marginRight: '15px',
    }

    return (
        <Flex __css={useStyleConfig('Navbar')} flexDirection="column">
            <h1 style={titleStyle}><img draggable="false" style={titleImgStyle} src={TitleIcon} />GRM</h1>
            <List variant="navList">
                <ListLink icon={DataBaseSVG} to="/collection" text="Data Collection" />
                <ListLink icon={DataPreprocessingSVG} to="/preprocessing" text="Data Preprocessing" />
                <ListLink icon={KoverLearnSVG} to="/kover" text="Kover Learn" />
                <ListLink icon={AnalysisSVG} to="/analysis" text="Analysis" />
                <Spacer />
                <ListLink icon={SettingsSVG} to="/settings" text="Settings" />
            </List >
        </Flex >
    );
}