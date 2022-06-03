import { Center, Heading } from '@chakra-ui/react';
import { colors } from '../lib/common/colors';

const Banner = () => {
  return (
    <Center py='3' bgColor={colors.green}>
      <Heading color='#ffffff' fontFamily='stone' size='xs' as='h5'>
        FATHER'S DAY IS COMING - CELEBRATE YE' OLD WIZARDS
      </Heading>
    </Center>
  );
};

export default Banner;
