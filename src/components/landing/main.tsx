import { Flex } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import SpellBlock from '../spell-block';
import Subcard from './subcard';

const Main = () => {
  const scale = useBreakpointValue({
    '2xl': 200,
    xl: 160,
    lg: 150,
    md: 120,
    sm: 100,
    base: 75,
  });
  return (
    <Flex
      bgGradient='linear(to-b, #E0E7EA, #7392A4)'
      py='2rem'
      h={{
        base: 'calc(100vh - 12rem)',
        sm: 'calc(100vh - 6rem)',
        md: 'calc(100vh - 8rem)',
      }}
    >
      <Flex
        justifyContent='flex-end'
        alignItems='center'
        w='full'
        direction='column'
        gap={{ base: '2rem', md: '4rem' }}
      >
        <SpellBlock scale={scale} />
        <Subcard />
      </Flex>
    </Flex>
  );
};

export default Main;
