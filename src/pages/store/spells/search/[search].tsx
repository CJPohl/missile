import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import SchoolList from '../../../../components/store/spells/school-list';
import SpellListing from '../../../../components/store/spells/spell-listing';

const Search = ({ listing }) => {
  return (
    <Flex justifyContent='center'>
      <Flex w='full' maxW='container.xl' py='10rem' fontFamily='normal'>
        <SchoolList active={'custom'} />
        <SpellListing listing={listing} />
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { data } = await axios.post(`http://localhost:3000/api/store/search`, {
    name: JSON.stringify(query.search),
  });
  return {
    props: { listing: data.results },
  };
};

export default Search;
