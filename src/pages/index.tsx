import { Container } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import ImgSep from '../components/imgSep/imgSep';
import Email from '../components/landing/email';
import Endorsements from '../components/landing/endorsements';
import LandingSelection from '../components/landing/landingSelection';
import Main from '../components/landing/main';
import useDisclaimer from '../lib/hooks/useDisclaimer';

// Site landing page
const Landing = ({ spells }) => {
  const { disclaimer } = useDisclaimer();

  return (
    <Container p='0rem' maxW='100vw'>
      <Main />
      <ImgSep />
      <LandingSelection spells={spells} />
      <Endorsements />
      <Email />
      {disclaimer}
    </Container>
  );
};

// // Query data for landing spell selection
export const getServerSideProps: GetServerSideProps = async () => {
  const { data: spell1 } = await axios.get(
    '/api/store/spells/single/62ab7f355bd76023556be6e3'
  );
  const { data: spell2 } = await axios.get(
    '/api/store/spells/single/62ab7f335bd76023556be5bd'
  );
  const { data: spell3 } = await axios.get(
    '/api/store/spells/single/62ab7f335bd76023556be5b5'
  );

  return {
    props: { spells: [spell1, spell2, spell3] },
  };
};

export default Landing;
