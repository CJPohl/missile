import { Container } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Main from '../components/landing/main';
const Landing = () => {
  return (
    <Container p={0} maxW='100vw'>
      <Main />
    </Container>
  );
};

export default Landing;
