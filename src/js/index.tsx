import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from "./theme";
import App from "./App";
import "../style/index.css"

const container: any = document.getElementById("root");
const root = createRoot(container);
root.render(
    <StrictMode>
        <BrowserRouter>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </StrictMode>
);
