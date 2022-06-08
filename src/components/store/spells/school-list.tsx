import { Flex, Heading, Link } from '@chakra-ui/react';
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
      >
        {school}
      </Link>
    </NextLink>
  ));

  return (
    <Flex
      direction='column'
      fontFamily='normal'
      color='dark'
      fontSize='1.4rem'
      gap='1rem'
      fontWeight='light'
    >
      <Heading color='dark' fontFamily='normal' as='h3'>
        Spells
      </Heading>
      <NextLink href='/store/spells/all' passHref>
        <Link _focus={{ border: 'none' }} fontWeight={isBold(active, 'all')}>
          All
        </Link>
      </NextLink>
      {schoolLinks}
    </Flex>
  );
};

export default SchoolList;
