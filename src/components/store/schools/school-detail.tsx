import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import useSchool from '../../../lib/hooks/useSchool';

// Single school info
const SchoolDetail = ({ school }) => {
  const schoolSvg = useSchool(school.index, 400);
  return (
    <Flex w='full' justifyContent='center'>
      <Flex
        direction='column'
        px='3rem'
        gap='5rem'
        w='full'
        color='dark'
        fontFamily='normal'
        fontSize='1.3rem'
      >
        <Flex gap='5rem'>
          {schoolSvg}
          <Flex direction='column' justifyContent='space-between'>
            <Flex
              direction='column'
              gap='1rem'
              h='full'
              justifyContent='space-between'
            >
              <Heading
                as='h2'
                letterSpacing='.4rem'
                textTransform='uppercase'
                color='dark'
                fontFamily='stone'
                fontSize='3rem'
              >
                {school.name}
              </Heading>
              <Box p='2rem' bgColor='beige'>
                <Text>{school.desc[0]}</Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SchoolDetail;
