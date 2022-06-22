import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { useEffect } from 'react';
import useFromBottom from '../../lib/hooks/animations/useFromBottom';

// Main card info
const Subcard = () => {
  const { controls, variants } = useFromBottom();
  useEffect(() => {
    controls.start('visible');
  });
  return (
    <Flex
      as={motion.div}
      animate={controls}
      variants={variants}
      initial='hidden'
      direction='column'
      gap='1rem'
      w='full'
      maxW='container.xl'
      pb='5rem'
      color='white'
      fontFamily='normal'
    >
      <Heading as='h2' fontFamily='stone' fontSize='5rem'>
        More casting, less sassing
      </Heading>
      <Text fontFamily='stone' fontSize='2rem'>
        Pre-prepared spell tomes for every need
      </Text>
      <Flex gap='2rem' color='dark'>
        <NextLink href='/store/spells/all'>
          <Button py='2rem' boxShadow='lg' fontSize='1.5rem'>
            SHOP SPELLS
          </Button>
        </NextLink>
        <NextLink href='/store/schools/abjuration'>
          <Button py='2rem' boxShadow='lg' fontSize='1.5rem'>
            EXPLORE SCHOOLS
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Subcard;
