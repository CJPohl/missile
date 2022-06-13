import { Flex, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SchoolList from '../../../components/store/schools/school-list';

// Dynamically show school pages
const School = () => {
  const router = useRouter();
  const { school } = router.query;
  return (
    <Flex justifyContent='center'>
      <Flex fontFamily='normal'>
        <SchoolList active={school} />
        {/* TODO */}
        {/* <Grid></Grid> */}
      </Flex>
    </Flex>
  );
};

export default School;
