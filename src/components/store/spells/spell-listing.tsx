import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useFromBottom from '../../../lib/hooks/animations/useFromBottom';
import { SpellQuery } from '../../../lib/models/Spell';
import SpellCard from '../../spell-card/spell-card';

const SpellListing = ({ listing }) => {
  const { ref, controls, variants } = useFromBottom();
  let spells: JSX.Element;

  // Render no spells if no results
  if (listing.length === 0) {
    spells = (
      <Flex w='full' justifyContent='center' alignItems='center'>
        <Heading fontFamily='normal' color='dark'>
          No Results
        </Heading>
      </Flex>
    );
  } else {
    spells = (
      <Grid
        as={motion.div}
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={variants}
        px='3rem'
        gridTemplateColumns={{base: '', md: 'repeat(3, 1fr)'}}
        gap='2rem'
      >
        {listing.map((spell: SpellQuery) => (
          <GridItem key={spell._id}>
            <SpellCard spell={spell} scale={60} />
          </GridItem>
        ))}
      </Grid>
    );
  }

  return spells;
};

export default SpellListing;
