import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import AddBtn from '../../../../components/store/cart/add-btn';
import SpellDescTable from '../../../../components/store/spells/spell-desc-table';
import useSchool from '../../../../lib/hooks/useSchool';

// Single spell page
const Spell = ({ spell }) => {
  const scale = useBreakpointValue({ md: 400, base: 275 });
  const school = useSchool(spell.school, scale);
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
        py={{ base: '5rem', md: '10rem' }}
        px={{ base: '2rem', xl: '0' }}
        color='dark'
        fontFamily='normal'
        fontSize='1.3rem'
      >
        <Flex
          gap='5rem'
          alignItems={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
        >
          {school}
          <Flex
            direction='column'
            h='full'
            justifyContent='space-between'
            alignItems={{ base: 'center', md: 'flex-start' }}
            gap={{ base: '1rem', md: '0' }}
          >
            <Flex
              direction='column'
              gap='1rem'
              textAlign={{ base: 'center', md: 'left' }}
            >
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
        <Box
          p={{ lg: '5rem', base: '3rem' }}
          fontSize={{ base: '1rem', lg: '1.2rem' }}
          bgColor='beige'
        >
          {descriptions}
        </Box>
        <SpellDescTable spell={spell} />
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { _id } = query;
  const { data: spell } = await axios.get(
    `https://missile.vercel.app/api/store/spells/single/${_id}`
  );

  return {
    props: { spell },
  };
};

export default Spell;
