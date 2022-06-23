import { Flex } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import SpellBlock from '../spell-block';
import Subcard from './subcard';

const Main = () => {
  const scale = useBreakpointValue({xl: 220, lg: 150, sm: 120, base: 75})
  return (
    <Flex bgGradient='linear(to-b, #FFFFFF, #7392A4)' py='2rem'>
      <Flex
        justifyContent='flex-end'
        alignItems='center'
        w='full'
        direction='column'
        gap={{base: '2rem', md: '8rem'}}
      >
        <SpellBlock scale={scale} />
        <Subcard />
      </Flex>
    </Flex>
  );
};

export default Main;
