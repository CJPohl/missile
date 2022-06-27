import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import isBold from '../../../lib/common/isBold';
import schoolList from '../../../lib/common/school-list';

// Render list of navigatable schools
const SchoolList = ({ active }) => {
  const schoolLinks = schoolList.map((school) => (
    <NextLink key={school} href={`/store/schools/${school}`} passHref>
      <Link
        _focus={{ border: 'none' }}
        fontFamily='normal'
        color='dark'
        textTransform='capitalize'
        fontWeight={isBold(active, school)}
        _hover={
          active === school ? { cursor: 'default', textDecoration: 'none' } : {}
        }
      >
        {school}
      </Link>
    </NextLink>
  ));

  return (
    <Accordion w='full' px='3rem' allowToggle>
      <AccordionItem>
        <Heading>
          <AccordionButton _focus={{ border: 'none' }}>
            <Box
              fontFamily='normal'
              color='darl'
              fontWeight='bold'
              fontSize={{ base: '1.8rem', lg: '2rem' }}
              flex='1'
              textAlign='left'
              as='h3'
              _expanded={{ bg: 'white' }}
            >
              Schools
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel>
          <Flex
            direction='column'
            textAlign={{ base: 'center', lg: 'left' }}
            fontFamily='normal'
            color='dark'
            fontSize={{ base: '1.2rem', lg: '1.4rem' }}
            gap='1rem'
            fontWeight='light'
          >
            {schoolLinks}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SchoolList;
