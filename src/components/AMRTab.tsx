import {
  Button,
  Checkbox,
  Text,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function AMRTab() {
  return (
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
      <TableContainer>
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
                <Td>13437.50</Td>
                <Td>achromobacter sp.</Td>
                <Td>Resistant</Td>
                <Td>64mg/L</Td>
              </Tr>
            ))}
          </Tbody>
          <hr />
          <TableCaption>Get amr data by species and antibiotic</TableCaption>
        </Table>
      </TableContainer>
    </div>
  );
}
