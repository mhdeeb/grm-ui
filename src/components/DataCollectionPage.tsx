import { Outlet, NavLink } from "react-router-dom";
import LinkTab from "./LinkTab";
import { VStack } from "@chakra-ui/react";

export default function DataCollectionPage() {
  return (
    <VStack flex={1}>
      <LinkTab
        replace
        draggable="false"
        as={NavLink}
        paths={{
          Genomes: "genomes",
          AMR: "amr",
        }}
      />
      <Outlet />
    </VStack>
  );
}
