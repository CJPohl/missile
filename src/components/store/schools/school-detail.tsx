import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import useSchool from '../../../lib/hooks/useSchool';

// Single school info
const SchoolDetail = ({ school }) => {
  const scale = useBreakpointValue({md: 400, base: 275})
  const schoolSvg = useSchool(school.index, scale);
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
        <Flex gap='5rem' alignItems={{base: 'center', md: 'flex-start'}} direction={{base: 'column', md: 'row'}}>
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
              <Box p={{md: '5rem', base: '3rem'}} fontSize={{base: '1rem', md: '1.2rem'}} bgColor='beige'>
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
