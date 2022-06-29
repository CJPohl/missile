import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

// Spell cards for checkout
const CheckoutSpellCard = ({ item, school }) => {
  return (
    <Flex key={item.spell._id} alignItems='center' gap='1rem'>
      <Text>{item.quantity + 'x'}</Text>
      <Box>{school}</Box>
      <NextLink href={`/store/spells/single/${item.spell._id}`}>
        <Text
          cursor='pointer'
          noOfLines={1}
          color='dark'
          fontSize='1rem'
          fontFamily='normal'
        >
          {item.spell.name}
        </Text>
      </NextLink>
    </Flex>
  );
};

export default CheckoutSpellCard;
