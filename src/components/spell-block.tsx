import { Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import schoolList from '../lib/common/school-list';
import useFromBottom from '../lib/hooks/animations/useFromBottom';
import useSchool from '../lib/hooks/useSchool';

// Svg block for spell schools
const SpellBlock = ({ scale }) => {
  // get each svg
  const svgs = schoolList.map((school) => {
    const component = useSchool(school, scale);
    return (
      <GridItem key={school} boxShadow='2xl' borderRadius='1rem'>
        {component}
      </GridItem>
    );
  });

  return (
    <Grid gridTemplateColumns='1fr 1fr 1fr 1fr' gap='1rem'>
      {svgs}
    </Grid>
  );
};

export default SpellBlock;
