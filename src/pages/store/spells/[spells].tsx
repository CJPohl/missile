import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import SchoolList from '../../../components/store/spells/school-list';
import SpellListing from '../../../components/store/spells/spell-listing';

// Dynamically render spells
const Spell = ({ listing }) => {
  const router = useRouter();
  const { spells } = router.query;
  return (
    <Flex justifyContent='center'>
      <Flex
        direction='column'
        gap='3rem'
        w='full'
        maxW='container.xl'
        py={{ base: '5rem', lg: '5rem' }}
        fontFamily='normal'
      >
        <SchoolList active={spells} />
        <SpellListing listing={listing} />
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { spells } = query;
  const { data: listing } = await axios.get(`/api/store/spells/${spells}`);

  return {
    props: { listing },
  };
};
export default Spell;
