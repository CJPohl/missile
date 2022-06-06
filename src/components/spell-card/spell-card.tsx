import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Necromancy from '../svgs/spells/Necromancy';

// Default store spell card item
const SpellCard = () => {
  return (
    <NextLink href='/'>
      <Flex
        direction='column'
        gap='.5rem'
        borderRadius='1rem'
        p='2rem'
        boxShadow='xl'
        fontFamily='normal'
        color='dark'
        cursor='pointer'
      >
        <Necromancy />
        <Heading as='h5' fontFamily='normal'>
          Spell Name
        </Heading>
        <Text>Spell Desc</Text>
        <Text>$ Price</Text>
      </Flex>
    </NextLink>
  );
};

export default SpellCard;
