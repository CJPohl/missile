import { Button, Container, Heading } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '../components/header';
const Home = () => {
  return (
    <Container maxW='container.lg'>
      <Header />
      <Heading>Hello, World</Heading>
    </Container>
  );
};

export default Home;
