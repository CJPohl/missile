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
      textAlign={{base: 'center', md: 'left'}}
      gap='1rem'
      w='full'
      maxW='container.xl'
      px={{sm: '2rem', xl: '0'}}
      color='white'
      fontFamily='normal'
    >
      <Heading as='h2' fontFamily='stone' fontSize={{base: '3rem' ,xl: '5rem'}}>
        More casting, less sassing
      </Heading>
      <Text fontFamily='stone' fontSize='2rem'>
        Pre-prepared spell tomes for every need
      </Text>
      <Flex direction={{base: 'column', md: 'row'}} alignItems='center' gap={{md: '2rem', base: '1rem'}} color='dark'>
        <NextLink href='/store/spells/all'>
          <Button py={{md: '2rem', base: '1.5rem'}} w='15rem' boxShadow='lg' fontSize={{md: '1.5rem', base: '1.3rem'}}>
            SHOP SPELLS
          </Button>
        </NextLink>
        <NextLink href='/store/schools/abjuration'>
          <Button py={{md: '2rem', base: '1.5rem'}} w='15rem' boxShadow='lg' fontSize={{md: '1.5rem', base: '1.3rem'}}>
            EXPLORE SCHOOLS
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default Subcard;
