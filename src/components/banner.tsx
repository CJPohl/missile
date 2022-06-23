import { Center, Heading } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Center display={{base: 'none', md: 'flex'}} py='3' bgColor='green' >
      <Heading
        color='#ffffff'
        textTransform='uppercase'
        letterSpacing='.05rem'
        fontFamily='stone'
        size='xs'
        as='h5'
      >
        study faster with missile premium - coming soon
      </Heading>
    </Center>
  );
};

export default Banner;
