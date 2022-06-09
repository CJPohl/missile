import { Flex, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import useSchool from '../../lib/hooks/useSchool';

// Default store spell card item
const SpellCard = ({ spell, scale }) => {
  // custom hook to render proper svg
  const school = useSchool(spell.school, scale);
  return (
    <NextLink href={`http://localhost:3000/store/spells/single/${spell._id}`}>
      <Flex
        direction='column'
        gap='1rem'
        // borderRadius='1rem'
        p='2rem'
        boxShadow='md'
        fontFamily='normal'
        color='dark'
        cursor='pointer'
      >
        <Flex alignSelf='center'>{school}</Flex>
        <Heading
          as='h5'
          noOfLines={1}
          color='dark'
          fontSize='1.4rem'
          fontFamily='normal'
        >
          {spell.name}
        </Heading>
        <Text noOfLines={[1, 2, 3]}>{spell.desc[0]}</Text>
        <Text>{spell.price !== 0 ? '$' + spell.price : 'FREE'}</Text>
      </Flex>
    </NextLink>
  );
};

export default SpellCard;
