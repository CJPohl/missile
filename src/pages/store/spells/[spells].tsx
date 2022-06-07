import { Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SchoolList from '../../../components/store/spells/school-list';
import SpellListing from '../../../components/store/spells/spell-listing';

const Spell = ({ listing }) => {
  const router = useRouter();
  const { spells } = router.query;
  return (
    <Flex justifyContent='center'>
      <Flex
        w='full'
        maxW='container.xl'
        py='15rem'
        h='100vh'
        fontFamily='normal'
      >
        <SchoolList active={spells} />
        {/* TODO */}
        <SpellListing listing={listing} />
      </Flex>
    </Flex>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { spells: 'all' } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data: listing } = await axios.get(
    `http://localhost:3000/api/store/${params.spells}`
  );
  return {
    props: {
      listing,
    },
  };
}

export default Spell;
