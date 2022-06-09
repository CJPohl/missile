import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import AddBtn from '../../../../components/store/cart/add-btn';
import useSchool from '../../../../lib/hooks/useSchool';
import { SpellQuery } from '../../../../lib/models/Spell';

// Single spell page
const Spell = ({ spell }) => {
  const school = useSchool(spell.school, 400);

  let descI = 0;
  const descriptions = spell.desc.map((d: string) => (
    <Text key={descI++}>{d}</Text>
  ));

  return (
    <Flex justifyContent='center'>
      <Flex
        direction='column'
        gap='5rem'
        w='full'
        maxW='container.xl'
        py='15rem'
        color='dark'
        fontFamily='normal'
        fontSize='1.3rem'
      >
        <Flex gap='5rem'>
          {school}
          <Flex direction='column' justifyContent='space-between'>
            <Flex direction='column' gap='1rem'>
              <Heading
                as='h2'
                letterSpacing='.4rem'
                textTransform='uppercase'
                color='dark'
                fontFamily='stone'
                fontSize='4rem'
              >
                {spell.name}
              </Heading>
              <Text>
                School of{' '}
                <Text as='span' textTransform='capitalize'>
                  {spell.school}
                </Text>
              </Text>
              <Text>
                {spell.level !== 0 ? 'Spell Level: ' + spell.level : 'Cantrip'}
              </Text>
              <Text>{spell.price !== 0 ? '$' + spell.price : 'FREE'}</Text>
            </Flex>
            <AddBtn spell={spell} />
          </Flex>
        </Flex>
        <Box p='5rem' bgColor='gray.300'>
          {descriptions}
        </Box>
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
      </Flex>
    </Flex>
  );
};

// Paths for dynamic spells
export const getStaticPaths: GetStaticPaths = async () => {
  const { data: spells } = await axios.get(
    'http://localhost:3000/api/store/spells/all'
  );
  const paths = spells.map((spell: SpellQuery) => ({
    params: { _id: spell._id },
  }));
  return {
    paths,
    fallback: false,
  };
};

// Fetch props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: spell } = await axios.get(
    `http://localhost:3000/api/store/spells/single/${params._id}`
  );
  return {
    props: { spell },
  };
};

export default Spell;
