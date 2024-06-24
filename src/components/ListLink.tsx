import { Link, useColorModeValue, Tooltip, Square } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function ListLink(props: any) {
    const linkStyle = {
        svg: {
            fill: 'grey',
            transition: "all 500ms ease",
            path: {
                stroke: "black"
            }
        },
        _activeLink: {
            color: 'blue.500',
            svg: {
                fill: useColorModeValue("blue.500", "green.300"),
                transition: "all 500ms ease",
                transform: "rotateY(180deg) scale(1.3)",
                _hover: {
                    fill: useColorModeValue("blue.500", "green.300")
                }
            }
        },
        _hover: {
            svg: {
                fill: useColorModeValue("blue.500", "white"),
                transition: "all 500ms ease"
            }
        }
    };

    return (
        <Tooltip label={props.text} openDelay={1500}>
            <Link sx={linkStyle} replace draggable="false" as={NavLink} to={props.to} >
                <Square size="2rem">
                    {<props.icon width="2rem" height="2rem" />}
                </Square>
            </Link >
        </Tooltip>
    )
}