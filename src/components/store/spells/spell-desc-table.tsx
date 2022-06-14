import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from '@chakra-ui/react';

const SpellDescTable = ({ spell }) => {
  return (
    <TableContainer
      border='1px'
      borderColor='gray.300'
      borderRadius='1rem'
      fontSize='1rem'
    >
      <Table variant='simple'>
        <TableCaption fontSize='1rem' color='dark' fontFamily='normal'>
          Other Information
        </TableCaption>
        <Thead fontWeight='semibold'>
          <Tr>
            <Td>CATEGORY</Td>
            <Td>DATA</Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Name</Td>
            <Td>{spell.name}</Td>
          </Tr>
          <Tr>
            <Td>Range</Td>
            <Td>{spell.range}</Td>
          </Tr>
          <Tr>
            <Td>School</Td>
            <Td textTransform='capitalize'>{spell.school}</Td>
          </Tr>
          <Tr>
            <Td>id</Td>
            <Td>{spell._id}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SpellDescTable;
