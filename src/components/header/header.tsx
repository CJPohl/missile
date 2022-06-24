import { Flex, Box } from '@chakra-ui/react';
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
      h={{base: '12rem', sm: '6rem'}}
      position={{md: 'sticky'}}
      top='0'
      w='full'
      px={{sm: '2rem', xl: '0'}}
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
      direction={{base: 'column', sm: 'row'}}
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
        display={{base: 'none', md: 'flex'}}
        w={{md: '10rem', lg: '12rem'}}
        justifyContent='space-between'
        >
          <LinkMenu type='store' />
          <LinkMenu type='schools' />
        </Flex>
        <Flex 
        direction={{base: 'column', sm: 'row'}}
         gap={{base: '.2rem', md: '2rem'}}>
          <SearchModal />
          <AuthMenu />
          <CartDrawer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
