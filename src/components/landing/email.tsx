import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react';

const Email = () => {
  return (
    <Flex
      py='5rem'
      px={{ base: '2rem', xl: '0' }}
      direction='column'
      alignItems='center'
      fontFamily='normal'
      gap='2rem'
    >
      <Heading fontFamily='stone' textAlign={{ base: 'center', md: 'left' }}>
        Want the latest and Greatest?
      </Heading>
      <Text textAlign={{ base: 'center', md: 'left' }} fontSize='1.3rem'>
        Join our email list and be the first to know about the explosive new
        spell books and a lot of other fun updates.
      </Text>
      <Flex gap='1rem'>
        <Input
          w={{ lg: '40rem' }}
          placeholder='Enter Your Email Address'
          bgColor='beige'
        />
        <Button fontSize='1.3rem' px='2rem' bgColor='dark' color='white'>
          SIGN UP
        </Button>
      </Flex>
    </Flex>
  );
};

export default Email;
