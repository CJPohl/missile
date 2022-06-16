import { Flex, Link, Text, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import logo from '../../../public/images/Logo.png';
import { FiSearch, FiUser } from 'react-icons/fi';
import CartDrawer from '../store/cart/cart-drawer/cart-drawer';
import SearchModal from './search-modal';
import LinkMenu from './link-menu';
const Header = () => {
  return (
    <Flex
      as='header'
      position='sticky'
      top='0'
      w='full'
      py={3}
      justifyContent='center'
      alignItems='center'
      fontFamily='stone'
      bgColor='white'
      fontSize='lg'
      color='dark'
      letterSpacing={1}
      zIndex='banner'
    >
      <Flex
        alignItems='center'
        w='full'
        justifyContent='space-between'
        maxW='container.xl'
      >
        <NextLink href='/'>
          <Flex
            w='15rem'
            p='3'
            _hover={{ boxShadow: 'md', borderRadius: '1rem' }}
            cursor='pointer'
          >
            <Image src={logo} alt='Missile Logo' />
          </Flex>
        </NextLink>
        <Flex gap={10}>
          <LinkMenu type='store' />
          <LinkMenu type='schools' />
          <NextLink href='/' passHref>
            <Link>ABOUT</Link>
          </NextLink>
        </Flex>
        <Flex alignItems='center' gap={16}>
          <SearchModal />
          <Flex alignItems='center' gap={2}>
            <Text>ACCOUNT</Text>
            <Icon as={FiUser} w={5} h={5} />
          </Flex>
          <CartDrawer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
