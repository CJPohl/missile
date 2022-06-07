import { Box, Flex, Text } from '@chakra-ui/react';

const SpellListing = ({ listing }) => {
  const divs = () => {
    return listing.map((spell) => (
      <Flex justifyContent='center'>
        <Text>{spell.name}</Text>
      </Flex>
    ));
  };
  return <Box w='full'>{divs()}</Box>;
};

export default SpellListing;
