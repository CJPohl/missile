import {
  Container,
  Heading,
  Box,
  Flex,
  Link,
  Text,
  Icon,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import logo from '../../public/images/Logo.png';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';
const Header = () => {
  return (
    <Flex
      as='header'
      position='fixed'
      w='full'
      py={3}
      justifyContent='center'
      alignItems='center'
      fontFamily='stone'
      fontSize='lg'
      letterSpacing={1}
    >
      <Flex
        alignItems='center'
        w='full'
        justifyContent='space-between'
        maxW='container.xl'
      >
        <Flex w='15rem'>
          <Image src={logo} alt='Missile Logo' />
        </Flex>
        <Flex gap={10}>
          <NextLink href='/' passHref>
            <Link>STORE</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link>SCHOOLS</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link>ABOUT</Link>
          </NextLink>
        </Flex>
        <Flex alignItems='center' gap={16}>
          <Flex alignItems='center' gap={2}>
            <Text>SEARCH</Text>
            <Icon as={FiSearch} w={5} h={5} />
          </Flex>
          <Flex alignItems='center' gap={2}>
            <Text>ACCOUNT</Text>
            <Icon as={FiUser} w={5} h={5} />
          </Flex>
          <Flex>
            <Icon as={FiShoppingBag} w={5} h={5} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
