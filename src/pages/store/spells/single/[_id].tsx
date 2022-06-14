import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import AddBtn from '../../../../components/store/cart/add-btn';
import SpellDescTable from '../../../../components/store/spells/spell-desc-table';
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
        py='10rem'
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
        <Box p='5rem' bgColor='beige'>
          {descriptions}
        </Box>
        <SpellDescTable spell={spell} />
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
