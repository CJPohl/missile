import { Flex, Grid, Heading, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import schoolList from '../../lib/common/school-list';

// Render links for footer
const FooterLinks = () => {
  // Render list of links per school
  const schoolLinks = schoolList.map((school) => (
    <NextLink
      key={school}
      href={`http://localhost:3000/store/schools/${school}`}
    >
      <Link textTransform='capitalize'>{school}</Link>
    </NextLink>
  ));
  return (
    <Grid gridTemplateColumns='repeat(3, 1fr)' gap='5rem'>
      <Flex direction='column' gap='1rem'>
        <Heading as='h5' fontFamily='stone' fontSize='1.5rem'>
          HELP
        </Heading>
        <Link>1-800-Missile</Link>
        <Link>help@missile.com</Link>
        <Link>Returns/Exchanges</Link>
        <Link>FAQ</Link>
      </Flex>
      <Flex direction='column' gap='1rem'>
        <Heading as='h5' fontFamily='stone' fontSize='1.5rem'>
          SHOP
        </Heading>
        {schoolLinks}
      </Flex>
      <Flex direction='column' gap='1rem'>
        <Heading as='h5' fontFamily='stone' fontSize='1.5rem'>
          COMPANY
        </Heading>
        <Link>Our Story</Link>
        <Link>Our Tomes</Link>
        <Link>Sustainability</Link>
        <Link>Investors</Link>
        <Link>Partnerships</Link>
        <Link>Spell Testing</Link>
        <Link>Affiliates</Link>
        <Link>Careers</Link>
        <Link>Press</Link>
        <Link>Bulk Orders</Link>
      </Flex>
    </Grid>
  );
};

export default FooterLinks;
