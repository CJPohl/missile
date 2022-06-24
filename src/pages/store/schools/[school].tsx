import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import SchoolDetail from '../../../components/store/schools/school-detail';
import SchoolList from '../../../components/store/schools/school-list';
import schoolList from '../../../lib/common/school-list';

// Dynamically show school pages
const School = ({ school }) => {
  return (
    <Flex justifyContent='center'>
      <Flex direction={{base: 'column', md: 'row'}} w='full' h={{base: 'calc(100vh - 12rem)', sm: 'calc(100vh - 6rem)', md: 'calc(100vh - 8rem)'}} maxW='container.xl' py='10rem' fontFamily='normal'>
        <SchoolList active={school.index} />
        <SchoolDetail school={school} />
      </Flex>
    </Flex>
  );
};

// Paths for dynamic schools
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = schoolList.map((school: string) => ({
    params: { school: school },
  }));
  return {
    paths,
    fallback: false,
  };
};

// Fetch props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: school } = await axios.get(
    `http://localhost:3000/api/store/schools/${params.school}`
  );
  return {
    props: school,
  };
};

export default School;
