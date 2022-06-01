import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents='none' children={<SearchIcon />} />
        <Input />
      </InputGroup>
    </Box>
  );
};

export default Search;
