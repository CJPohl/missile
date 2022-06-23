import { Flex, Link, Text, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import logo from '../../../public/images/Logo.png';
import CartDrawer from '../store/cart/cart-drawer/cart-drawer';
import SearchModal from './search-modal';
import LinkMenu from './link-menu';
import AuthMenu from './auth-menu';
const Header = () => {
  return (
    <Flex
      as='header'
      
      position={{md: 'sticky'}}
      top='0'
      w='full'
   
      justifyContent='center'
      alignItems='center'
      fontFamily='stone'
      bgColor='white'
      fontSize='lg'
      color='dark'
      letterSpacing='.2rem'
      zIndex='banner'
    >
      <Flex
      direction={{base: 'column', md: 'row'}}
        alignItems='center'
        w='full'
        justifyContent='space-between'
        maxW='container.xl'
      >
        <NextLink href='/'>
          <Flex
            w={{lg: '15rem', base: '10rem'}}
            cursor='pointer'
          >
            <Image src={logo} alt='Missile Logo' />
          </Flex>
        </NextLink>
        <Flex 
        direction={{base: 'column', md: 'row'}} gap={{base: '.2rem', md: '2rem'}}>
          <LinkMenu type='store' />
          <LinkMenu type='schools' />
        </Flex>
        <Flex 
        direction={{base: 'column', md: 'row'}}  gap={{base: '.2rem', md: '2rem'}}>
          <SearchModal />
          <AuthMenu />
          <CartDrawer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
