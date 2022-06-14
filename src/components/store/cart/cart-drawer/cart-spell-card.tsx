import { Box, Grid, Td, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import useSchool from '../../../../lib/hooks/useSchool';

const CartSpellCard = ({ quantity, spell, scale }) => {
  const school = useSchool(spell.school, scale);
  return (
    <Td fontFamily='normal' color='dark'>
      <NextLink href={`http://localhost:3000/store/spells/single/${spell._id}`}>
        <Grid
          gridTemplateColumns='repeat(4, 1fr)'
          alignItems='center'
          justifyContent='space-between'
          cursor='pointer'
        >
          <Text>{quantity + 'x'}</Text>
          <Box>{school}</Box>
          <Text noOfLines={1} color='dark' fontSize='1rem' fontFamily='normal'>
            {spell.name}
          </Text>
          <Text>{spell.price !== 0 ? '$' + spell.price : 'FREE'}</Text>
        </Grid>
      </NextLink>
    </Td>
  );
};

export default CartSpellCard;
