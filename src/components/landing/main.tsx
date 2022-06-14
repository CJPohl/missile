import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import tiles from '../../../public/images/spell-block.png';
import SpellBlock from '../spell-block';
import Subcard from './subcard';

const Main = () => {
  return (
    <Flex h='90vh' bgGradient='linear(to-b, #FFFFFF, #7392A4)'>
      <Flex
        justifyContent='flex-end'
        alignItems='center'
        w='full'
        direction='column'
        gap='8rem'
      >
        <SpellBlock scale={220} />
        <Subcard />
      </Flex>
    </Flex>
  );
};

export default Main;
