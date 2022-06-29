import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import SchoolList from '../../../../components/store/spells/school-list';
import SpellListing from '../../../../components/store/spells/spell-listing';

// Use search query to pull results rendeirng with server side props
const Search = ({ listing }) => {
  return (
    <Flex justifyContent='center'>
      <Flex
        direction='column'
        gap='3rem'
        w='full'
        maxW='container.xl'
        py={{ base: '5rem', md: '5rem' }}
        fontFamily='normal'
      >
        <SchoolList active={'custom'} />
        <SpellListing listing={listing} />
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { search } = query;
  const { data } = await axios.post(
    `https://missile.vercel.app/api/store/search`,
    {
      name: search,
    }
  );
  return {
    props: { listing: data },
  };
};

export default Search;
