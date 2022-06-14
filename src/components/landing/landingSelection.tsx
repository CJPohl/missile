import { Flex, Grid, Heading } from '@chakra-ui/react';
import { SpellDocument } from '../../lib/models/Spell';
import SpellCard from '../spell-card/spell-card';

// Selection of spells for landing page
const LandingSelection = ({ spells }) => {
  return (
    <Flex py='10rem' direction='column' alignItems='center' gap='5rem' w='full'>
      <Heading fontFamily='stone' color='dark'>
        A Scholarly Selection{' '}
      </Heading>
      <Grid gridTemplateColumns='repeat(3, 1fr)' gap='2rem' maxW='container.xl'>
        <SpellCard scale={60} spell={spells[0]} />
        <SpellCard scale={60} spell={spells[1]} />
        <SpellCard scale={60} spell={spells[2]} />
      </Grid>
    </Flex>
  );
};

export default LandingSelection;
