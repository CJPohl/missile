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
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import isBold from '../../../lib/common/isBold';
import schoolList from '../../../lib/common/school-list';

// Render list of navigatable schools
const SchoolList = ({ active }) => {
  const schoolLinks = schoolList.map((school) => (
    <NextLink key={school} href={`/store/spells/${school}`} passHref>
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
    <Accordion px='3rem' allowToggle>
      <AccordionItem>
        <Heading>
          <AccordionButton _focus={{ border: 'none' }}>
            <Box
              fontFamily='normal'
              color='dark'
              fontWeight='bold'
              fontSize={{ base: '1.8rem', lg: '2rem' }}
              flex='1'
              textAlign='left'
              as='h3'
              _expanded={{ bg: 'white' }}
            >
              Spells
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
            <NextLink href='/store/spells/all' passHref>
              <Link
                _focus={{ border: 'none' }}
                _hover={
                  active === 'all'
                    ? { cursor: 'default', textDecoration: 'none' }
                    : {}
                }
                fontWeight={isBold(active, 'all')}
              >
                All
              </Link>
            </NextLink>
            <Text
              fontFamily='normal'
              color='dark'
              fontWeight={isBold(active, 'custom')}
              cursor='default'
            >
              Custom
            </Text>
            {schoolLinks}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SchoolList;
