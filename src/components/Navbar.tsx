import TitleIcon from "../asset/logo.svg";
import DataBaseSVG from "../components/svg/DatabaseSVG";
import DataPreprocessingSVG from "../components/svg/ProcessingSVG";
import KoverLearnSVG from "../components/svg/KoverSVG";
import AnalysisSVG from "../components/svg/AnalysisSVG";
import SettingsSVG from "../components/svg/SettingsSVG";
import ListLink from "./ListLink";
import {
  Flex,
  Spacer,
  Image,
  Heading,
  useStyleConfig,
  Center,
  VStack,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const titleStyle: any = {
    boxShadow: "2px 0px 2px black",
    borderBottom: "1px solid grey",
    fontSize: "1.5rem",
    paddingBlock: "1rem",
  };

  const titleImgStyle: any = {
    width: "2rem",
    height: "2rem",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About GRM</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            GRM (Genomic Resistance Mapping) is a web application that provides
            a platform for data collection, preprocessing, analysis, and machine
            learning. It is designed to be user-friendly and easy to use. GRM
            frontend is built using React and Chakra UI. The backend is built
            using using Python. GRM is open-source and free to use. For more
            information, visit the GitHub repository.
            <br />
            <br />
            <Link to="https://github.com/editnori/Genomic-Resistance-Mapping-GRM-">
              GitHub
            </Link>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex __css={useStyleConfig("Navbar")} flexDirection="column">
        <Heading onClick={onOpen}>
          <Tooltip label="GRM" openDelay={1500}>
            <Center style={titleStyle}>
              <Image draggable="false" style={titleImgStyle} src={TitleIcon} />
            </Center>
          </Tooltip>
        </Heading>
        <VStack display="flex" h="100%">
          <ListLink icon={DataBaseSVG} to="collection" text="Data Collection" />
          <ListLink
            icon={DataPreprocessingSVG}
            to="preprocessing"
            text="Data Preprocessing"
          />
          <ListLink icon={KoverLearnSVG} to="kover" text="Kover Learn" />
          <ListLink icon={AnalysisSVG} to="analysis" text="Analysis" />
          <Spacer />
          <ListLink icon={SettingsSVG} to="settings" text="Settings" />
        </VStack>
      </Flex>
    </>
  );
}
