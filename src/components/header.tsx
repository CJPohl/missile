import { Container, Heading, Box, Flex } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import Search from './search';
const Header = () => {
  return (
    <Flex justifyContent='space-between'>
      <Flex alignItems='center'>
        <WarningTwoIcon />
        <Heading>Missile</Heading>
      </Flex>
      <Search />
      <Heading>Cart</Heading>
      <Heading>Signin</Heading>
    </Flex>
  );
};

export default Header;
