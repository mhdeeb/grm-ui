import { ListItem, Link, ListIcon, useColorModeValue } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export default function ListLink(props: any) {
    return (
        <Link sx={{
            svg: {
                fill: 'grey',
                transition: "all 500ms ease",
            },
            _activeLink: {
                bg: 'light.100',
                color: 'blue.500',
                svg: {
                    fill: useColorModeValue("blue.500", "green.300"),
                    transition: "all 500ms ease",
                    transform: "rotateY(180deg) scale(2)",

                }
            }
        }
        } replace draggable="false" as={NavLink} to={props.to} >
            <ListItem>
                <ListIcon as={props.icon} />
                {props.text}
            </ListItem>
        </Link >
    )
}