import TitleIcon from '../asset/logo.svg';
import DataBaseSVG from '../components/svg/DatabaseSVG';
import DataPreprocessingSVG from '../components/svg/ProcessingSVG';
import KoverLearnSVG from '../components/svg/KoverSVG';
import AnalysisSVG from '../components/svg/AnalysisSVG';
import SettingsSVG from '../components/svg/SettingsSVG';
import ListLink from './ListLink';
import { Flex, Spacer, Image, Heading, useStyleConfig, Center, VStack, Tooltip } from '@chakra-ui/react';

export default function Navbar() {
    const titleStyle: any = {
        boxShadow: '2px 0px 2px black',
        borderBottom: "1px solid grey",
        fontSize: '1.5rem',
        paddingBlock: '1rem',
    }

    const titleImgStyle: any = {
        width: '2rem',
        height: '2rem',
    }

    return (
        <Flex __css={useStyleConfig('Navbar')} flexDirection="column">
            <Heading>
                <Tooltip label="GRM" openDelay={1500}>
                    <Center style={titleStyle}>
                        <Image draggable="false" style={titleImgStyle} src={TitleIcon} />
                    </Center>
                </Tooltip>
            </Heading>
            <VStack display="flex" h="100%">
                <ListLink icon={DataBaseSVG} to="/collection" text="Data Collection" />
                <ListLink icon={DataPreprocessingSVG} to="/preprocessing" text="Data Preprocessing" />
                <ListLink icon={KoverLearnSVG} to="/kover" text="Kover Learn" />
                <ListLink icon={AnalysisSVG} to="/analysis" text="Analysis" />
                <Spacer />
                <ListLink icon={SettingsSVG} to="/settings" text="Settings" />
            </VStack >
        </Flex >
    );
}