import { createMultiStyleConfigHelpers, defineStyleConfig, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { listAnatomy as parts } from "@chakra-ui/anatomy";

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const navList = definePartsStyle((props) => ({
    container: {
        display: "flex",
        h: '100%',
        flexDirection: "column",
        justify: "center",
        align: "center",
    },
    icon: {
        transform: "scale(1.8)",
        marginRight: '20px',
        path: {
            stroke: "black"
        },
    },
}));

const List = defineMultiStyleConfig({
    variants: {
        navList,
    },
})

const Navbar = defineStyleConfig({
    baseStyle: {
        display: 'flex',
        scrollbarWidth: 'none',
        overflowY: 'scroll',
        color: 'light.300',
        bg: 'light.50',
        _dark: {
            color: 'dark.300',
            bg: 'dark.50',
        },
    }
})

const Link = defineStyleConfig({
    baseStyle: {
        p: 5,
        userSelect: 'none',
        transition: "all 100ms ease-out",
        _dark: {
            _activeLink: {
                bg: 'dark.100',
                color: 'green.300',
            },
            _hover: {
                bg: 'dark.200',
                _activeLink: {
                    bg: 'dark.100',
                }
            }
        },
        _hover: {
            textDecoration: 'none',
            bg: 'light.200',
            transition: "all 100ms ease-out",
            transform: "scale(1.05)",
            _activeLink: {
                bg: 'light.100',
                transform: "scale(1)",
            }
        },
    }
})


const theme = extendTheme({
    config, components: {
        Navbar,
        List,
        Link,
    }, colors: {
        dark: {
            50: '#2b2b2b',
            100: '#4d4d4d',
            200: '#6a6a6a',
            300: '#fff',
        },
        light: {
            50: '#f0f0f0',
            100: '#a0a0a0',
            200: '#6a6a6a',
            300: '#000',
        }
    }
})

export default theme