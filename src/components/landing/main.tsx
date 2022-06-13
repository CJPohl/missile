import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import tiles from '../../../public/images/spell-block.png';
import Subcard from './subcard';

const Main = () => {
  return (
    <Flex h='90vh' bgGradient='linear(to-b, #FFFFFF, #7392A4)'>
      <Flex
        justifyContent='flex-end'
        alignItems='center'
        w='full'
        direction='column'
        gap='3rem'
      >
        <Flex w='50rem'>
          <Image src={tiles} alt='Spell Tiles' />
        </Flex>
        <Subcard />
      </Flex>
    </Flex>
  );
};

export default Main;
