import {
  Button,
  Checkbox,
  Text,
  Select,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function AMRTab() {
  return (
    <div style={{ width: "100%", padding: "1rem", overflow: "hidden" }}>
      <div>
        <Select placeholder="Antibiotic">
          {Array.from({ length: 100 }).map((_, i) => (
            <option value="option">Option {i}</option>
          ))}
        </Select>
        <Select placeholder="Species">
          {Array.from({ length: 100 }).map((_, i) => (
            <option value="option">Option {i}</option>
          ))}
        </Select>
        <Button>Export to .tsv</Button>
        <Checkbox>Drop Intermediate</Checkbox>
        <Checkbox>Numeric Phenotypes</Checkbox>
        <Checkbox>Filter Contradictions</Checkbox>
        <Text>Total: 0</Text>
        <Text>Total Resistant: 0</Text>
        <Text>Total Susceptible: 0</Text>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>Genome ID</Th>
            <Th>Genome Name</Th>
            <Th>Phenotype</Th>
            <Th>Measurements</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 100 }).map((_, i) => (
            <Tr key={i}>
              <Td>{i}</Td>
              <Td>achromobacter sp.</Td>
              <Td>Resistant</Td>
              <Td>64mg/L</Td>
            </Tr>
          ))}
        </Tbody>
        <hr />
        <TableCaption>Get amr data by species and antibiotic</TableCaption>
      </Table>
    </div>
  );
}

{
  /* <VStack spacing={4} align="stretch">
  <Box borderWidth={1} borderRadius="lg" p={4}>
    <Text fontSize="xl" mb={4}>
      List available AMR datasets
    </Text>
    <HStack>
      <Select
        placeholder="Select species"
        value={amrData.speciesFilter}
        onChange={(e) => handleAmrDataChange("speciesFilter", e.target.value)}
      >
      </Select>
      <Checkbox
        isChecked={amrData.filterByPhenotypeCount}
        onChange={(e) =>
          handleAmrDataChange("filterByPhenotypeCount", e.target.checked)
        }
      >
        Phenotype count ≥ 50
      </Checkbox>
    </HStack>
    <Table variant="simple" mt={4}>
      <Thead>
        <Tr>
          <Th>Species</Th>
          <Th>Antibiotic</Th>
        </Tr>
      </Thead>
      <Tbody>Add table rows here</Tbody>
    </Table>
  </Box>
  <Box borderWidth={1} borderRadius="lg" p={4}>
    <Text fontSize="xl" mb={4}>
      Get AMR data by species and antibiotic
    </Text>
    <HStack>
      <Select
        placeholder="Select antibiotic"
        value={amrData.antibioticFilter}
        onChange={(e) =>
          handleAmrDataChange("antibioticFilter", e.target.value)
        }
      >
      </Select>
      <Select
        placeholder="Select species"
        value={amrData.speciesFilter}
        onChange={(e) => handleAmrDataChange("speciesFilter", e.target.value)}
      >
      </Select>
    </HStack>
    <HStack mt={4}>
      <Checkbox
        isChecked={amrData.dropIntermediate}
        onChange={(e) =>
          handleAmrDataChange("dropIntermediate", e.target.checked)
        }
      >
        Drop Intermediate
      </Checkbox>
      <Checkbox
        isChecked={amrData.numericPhenotypes}
        onChange={(e) =>
          handleAmrDataChange("numericPhenotypes", e.target.checked)
        }
      >
        Numeric Phenotypes
      </Checkbox>
      <Checkbox
        isChecked={amrData.filterContradictions}
        onChange={(e) =>
          handleAmrDataChange("filterContradictions", e.target.checked)
        }
      >
        Filter Contradictions
      </Checkbox>
    </HStack>
    <Button mt={4} onClick={updateAmrTable}>
      Update Table
    </Button>
    <Table variant="simple" mt={4}>
      <Thead>
        <Tr>
          <Th>Genome ID</Th>
          <Th>Genome Name</Th>
          <Th>Phenotype</Th>
          <Th>Measurements</Th>
        </Tr>
      </Thead>
      <Tbody></Tbody>
    </Table>
  </Box>
</VStack>; */
}
