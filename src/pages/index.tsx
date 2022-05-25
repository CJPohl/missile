import { Center, Heading } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
const Home = () => {
  signIn();
  return (
    <Center>
      <Heading>Hello, World</Heading>
    </Center>
  );
};

export default Home;
