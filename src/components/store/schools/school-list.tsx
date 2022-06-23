import { Flex, Heading, Link } from '@chakra-ui/react';
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
      >
        {school}
      </Link>
    </NextLink>
  ));

  return (
    <Flex direction='column' textAlign={{base: 'center', md: 'left'}} fontSize={{base: '1.2rem', md: '1.4'}} gap='1rem' fontWeight='light'>
      <Heading fontFamily='normal' color='dark' as='h3'>
        Schools
      </Heading>
      {schoolLinks}
    </Flex>
  );
};

export default SchoolList;
