import { Box, Grid, GridItem, Td, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import useSchool from '../../../../../lib/hooks/useSchool';
import DeleteBtn from './delete-btn';
import ItemCount from './item-count';

const CartSpellCard = ({ quantity, spell, scale }) => {
  const school = useSchool(spell.school, scale);
  return (
    <Td fontFamily='normal' fontSize={{base: '.8rem', md: '1rem'}} color='dark'>
      <Grid
        gridTemplateColumns='repeat(5, 1fr)'
        alignItems='center'
        justifyContent='space-between'
      >
        <ItemCount item={{ spell, quantity }} />
        <Box>{school}</Box>
        <NextLink
          href={`http://localhost:3000/store/spells/single/${spell._id}`}
        >
          <Text
            cursor='pointer'
            noOfLines={1}
            color='dark'
            fontFamily='normal'
            fontSize={{base: '.6rem', md: '1rem'}}
          >
            {spell.name}
          </Text>
        </NextLink>
        <GridItem justifySelf='center'>
          <Text>{spell.price !== 0 ? '$' + spell.price : 'FREE'}</Text>
        </GridItem>
        <DeleteBtn spell={spell} />
      </Grid>
    </Td>
  );
};

export default CartSpellCard;
