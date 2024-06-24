import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"

export default function DataCollectionPage() {
    return (
        <Tabs isFitted variant='enclosed' flex={1} sx={{ transition: "all 100ms" }}>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}