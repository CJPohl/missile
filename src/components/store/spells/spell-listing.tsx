import { Grid, GridItem } from '@chakra-ui/react';
import { SpellQuery } from '../../../lib/models/Spell';
import SpellCard from '../../spell-card/spell-card';

const SpellListing = ({ listing }) => {
  const spells = listing.map((spell: SpellQuery) => (
    <GridItem key={spell._id}>
      <SpellCard spell={spell} scale={60} />
    </GridItem>
  ));

  return (
    <Grid px='3rem' gridTemplateColumns='repeat(3, 1fr)' gap='2rem'>
      {spells}
    </Grid>
  );
};

export default SpellListing;
