import { Box, Flex, Text } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { motion } from 'framer-motion';
import useFromBottom from '../../lib/hooks/animations/useFromBottom';
import SpellBlock from '../spell-block';
import FooterLinks from './footer-links';

// Global footer for site
const Footer = () => {
  const scale = useBreakpointValue({ xl: 150, md: 120, sm: 90, base: 75 });
  const { ref, controls, variants } = useFromBottom();
  return (
    <Flex
      direction='column'
      alignItems='center'
      color='white'
      bgColor='dark'
      py={{ base: '2rem', md: '5rem' }}
    >
      <Flex
        maxW='container.xl'
        w='full'
        direction='column'
        gap={{ base: '4rem', md: '6rem' }}
        fontFamily='normal'
      >
        <Flex
          alignItems='center'
          direction={{ base: 'column', xl: 'row' }}
          letterSpacing='.1rem'
          gap={{ base: '2rem', xl: '0' }}
        >
          <FooterLinks />
          <Box
            as={motion.div}
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={variants}
          >
            <SpellBlock scale={scale} />
          </Box>
        </Flex>
        <Text textAlign='center' fontSize={{ base: '.7rem', md: '1rem' }}>
          © Missile All Rights Reserved. Terms, Privacy & Accessibility
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
