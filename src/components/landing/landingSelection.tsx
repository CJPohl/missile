import { Flex, Grid, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useFromBottom from '../../lib/hooks/animations/useFromBottom';
import SpellCard from '../spell-card/spell-card';

// Selection of spells for landing page
const LandingSelection = ({ spells }) => {
  // Animation hook
  const { ref, controls, variants } = useFromBottom();

  return (
    <Flex
      as={motion.div}
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={variants}
      py={{md: '10rem', base: '5rem'}}
      direction='column'
      alignItems='center'
      gap='5rem'
      w='full'
      
    >
      <Heading fontFamily='stone' color='dark'>
        A Scholarly Selection{' '}
      </Heading>
      <Grid gridTemplateColumns={{md: 'repeat(3, 1fr)'}} 
       gap='2rem' maxW='container.xl'>
        <SpellCard scale={60} spell={spells[0]} />
        <SpellCard scale={60} spell={spells[1]} />
        <SpellCard scale={60} spell={spells[2]} />
      </Grid>
    </Flex>
  );
};

export default LandingSelection;
