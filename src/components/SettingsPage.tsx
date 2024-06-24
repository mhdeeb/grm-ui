import { useColorMode, Button } from "@chakra-ui/react"

export default function SettingsPage() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div className="page">
            <Button onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </div>
    );
}