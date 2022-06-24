import { Center, Heading } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Center display={{base: 'none', md: 'flex'}} h='2rem' bgColor='green' >
      <Heading
        color='#ffffff'
        textTransform='uppercase'
        letterSpacing='.05rem'
        fontFamily='stone'
        fontSize='.7rem'
        as='h5'
      >
        study faster with missile premium - coming soon
      </Heading>
    </Center>
  );
};

export default Banner;
