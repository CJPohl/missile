import { Flex, Heading, Icon, useToast } from '@chakra-ui/react';
import { BsBagPlus } from 'react-icons/bs';

// Toast hook to be u sed again
const useUpdateToast = () => {
  const toast = useToast();

  return (msg: string) => {
    toast({
      duration: 2000,
      isClosable: true,
      render: () => (
        <Flex
          p='1.3rem'
          alignItems='center'
          gap='1rem'
          borderRadius='1rem'
          bgColor='green'
          color='white'
        >
          <Icon h={5} w={5} as={BsBagPlus} />
          <Heading as='h5' fontSize='1.3rem' fontFamily='stone' fontWeight='md'>
            {msg}
          </Heading>
        </Flex>
      ),
    });
  };
};

export default useUpdateToast;
