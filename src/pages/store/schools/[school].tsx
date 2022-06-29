import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import SchoolDetail from '../../../components/store/schools/school-detail';
import SchoolList from '../../../components/store/schools/school-list';

// Dynamically show school pages
const School = ({ school }) => {
  return (
    <Flex justifyContent='center'>
      <Flex
        direction='column'
        gap='3rem'
        alignItems='center'
        justifyContent='center'
        py={{ base: '5rem', lg: '10rem' }}
        px={{ base: '2rem', xl: '0' }}
        w='full'
        h={{
          base: 'auto',
          lg: 'calc(100vh - 8rem)',
        }}
        maxW='container.xl'
        fontFamily='normal'
      >
        <SchoolList active={school.index} />
        <SchoolDetail school={school} />
      </Flex>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { school } = query;
  const { data } = await axios.get(
    `https://missile.vercel.app/api/store/schools/${school}`
  );

  return {
    props: { school: data },
  };
};

export default School;
