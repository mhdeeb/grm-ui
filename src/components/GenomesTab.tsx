import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function GenomesTab() {
  return (
    <Tabs isFitted variant="line" w="100%">
      <TabList mb="1em">
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
