import { Box, Flex, Grid, Heading, Link, Text } from '@chakra-ui/react';
import schoolList from '../lib/common/school-list';

// Global footer for site
const Footer = () => {
  // Render list of links per school
  const schoolLinks = schoolList.map((school) => (
    <Link key={school} textTransform='capitalize'>
      {school}
    </Link>
  ));

  return (
    <Flex
      direction='column'
      alignItems='center'
      color='white'
      bgColor='dark'
      py='5rem'
    >
      <Flex
        maxW='container.xl'
        w='full'
        direction='column'
        gap='6rem'
        fontFamily='normal'
      >
        <Flex>
          <Grid gridTemplateColumns='repeat(3, 1fr)' gap='5rem'>
            <Flex direction='column' gap='.5rem'>
              <Heading as='h5' fontFamily='stone' fontSize='1.5rem'>
                HELP
              </Heading>
              <Link>1-800-Missile</Link>
              <Link>help@missile.com</Link>
              <Link>Returns/Exchanges</Link>
              <Link>FAQ</Link>
            </Flex>
            <Flex direction='column' gap='.5rem'>
              <Heading as='h5' fontFamily='stone' fontSize='1.5rem'>
                SHOP
              </Heading>
              {schoolLinks}
            </Flex>
            <Flex direction='column' gap='.5rem'>
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
        </Flex>
        <Text textAlign='center'>
          © Missile All Rights Reserved. Terms, Privacy & Accessibility
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
