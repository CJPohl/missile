import { Container } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import ImgSep from '../components/imgSep/imgSep';
import LandingSelection from '../components/landing/landingSelection';
import Main from '../components/landing/main';

// Site landing page
const Landing = () => {
  return (
    <Container p={0} maxW='100vw'>
      <Main />
      <ImgSep />
      <LandingSelection />
    </Container>
  );
};

export default Landing;
