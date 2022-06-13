import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react';

const Email = () => {
  return (
    <Flex
      py='3rem'
      direction='column'
      alignItems='center'
      fontFamily='normal'
      gap='2rem'
    >
      <Heading fontFamily='stone'>Want the latest and Greatest?</Heading>
      <Text fontSize='1.3rem'>
        Join our email list and be the first to know about the explosive new
        spell books and a lot of other fun updates.
      </Text>
      <Flex gap='1rem'>
        <Input
          w='40rem'
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
