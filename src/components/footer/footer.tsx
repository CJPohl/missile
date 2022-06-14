import { Flex, Text } from '@chakra-ui/react';
import SpellBlock from '../spell-block';
import FooterLinks from './footer-links';

// Global footer for site
const Footer = () => {
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
          <SpellBlock scale={150} />
        </Flex>
        <Text textAlign='center'>
          © Missile All Rights Reserved. Terms, Privacy & Accessibility
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
