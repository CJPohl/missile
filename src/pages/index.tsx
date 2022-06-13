import { Container } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import ImgSep from '../components/imgSep/imgSep';
import Email from '../components/landing/email';
import Endorsements from '../components/landing/endorsements';
import LandingSelection from '../components/landing/landingSelection';
import Main from '../components/landing/main';

// Site landing page
const Landing = ({ spells }) => {
  return (
    <Container p={0} maxW='100vw'>
      <Main />
      <ImgSep />
      <LandingSelection spells={spells} />
      <Endorsements />
      <Email />
    </Container>
  );
};

// Query data for landing spell selection
export const getStaticProps: GetStaticProps = async () => {
  const { data: spell1 } = await axios.get(
    'http://localhost:3000/api/store/spells/single/628fc38e9b41a1db1be09fe4'
  );
  const { data: spell2 } = await axios.get(
    'http://localhost:3000/api/store/spells/single/628fc38e9b41a1db1be09fac'
  );
  const { data: spell3 } = await axios.get(
    'http://localhost:3000/api/store/spells/single/628fc38e9b41a1db1be09f66'
  );

  return {
    props: { spells: [spell1, spell2, spell3] },
  };
};

export default Landing;
