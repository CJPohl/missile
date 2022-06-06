import { Flex } from '@chakra-ui/react';
import SpellCard from '../spell-card/spell-card';

const LandingSelection = () => {
  return (
    <Flex py='10rem' justifyContent='center' w='full'>
      <Flex w='full' justifyContent='space-evenly' maxW='container.xl'>
        <SpellCard />
        <SpellCard />
        <SpellCard />
      </Flex>
    </Flex>
  );
};

export default LandingSelection;
