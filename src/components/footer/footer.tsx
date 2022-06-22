import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useFromBottom from '../../lib/hooks/animations/useFromBottom';
import SpellBlock from '../spell-block';
import FooterLinks from './footer-links';

// Global footer for site
const Footer = () => {
  const { ref, controls, variants } = useFromBottom();
  return (
    <Flex
      direction='column'
      alignItems='center'
      color='white'
      bgColor='dark'
      py='5rem'
    >
      <Flex
        maxW='container.xl'
        w='full'
        direction='column'
        gap='6rem'
        fontFamily='normal'
      >
        <Flex alignItems='center' letterSpacing='.1rem'>
          <FooterLinks />
          <Box
            as={motion.div}
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={variants}
          >
            <SpellBlock scale={150} />
          </Box>
        </Flex>
        <Text textAlign='center'>
          © Missile All Rights Reserved. Terms, Privacy & Accessibility
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
