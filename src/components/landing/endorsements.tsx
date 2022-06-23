import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaMedium, FaReddit, FaPinterest, FaEtsy } from 'react-icons/fa';
import useFromBottom from '../../lib/hooks/animations/useFromBottom';

const Endorsements = () => {
  const { ref, controls, variants } = useFromBottom();
  return (
    <Flex py='5rem' direction='column' bgColor='beige'>
      <Flex
        as={motion.div}
        ref={ref}
        animate={controls}
        initial='hidden'
        variants={variants}
        direction='column'
        alignItems='center'
        gap='6rem'
      >
        <Heading as='h3' fontSize={{md: '2rem', base: '1.3rem'}} textAlign={{base: 'center', md: 'left'}} fontFamily='news' color='darkgray'>
          "Who would of thought a bunch of old wizards would of made the jocks
          nervous..."
        </Heading>
        <Flex gap={{base: '2rem', md: '8rem'}}>
          <Icon color='dark' h={{md: '7rem', base: '4rem'}} w={{md: '7rem', base: '4rem'}} as={FaMedium}></Icon>
          <Icon color='dark' h={{md: '7rem', base: '4rem'}} w={{md: '7rem', base: '4rem'}} as={FaReddit}></Icon>
          <Icon color='dark' h={{md: '7rem', base: '4rem'}} w={{md: '7rem', base: '4rem'}} as={FaPinterest}></Icon>
          <Icon color='dark' h={{md: '7rem', base: '4rem'}} w={{md: '7rem', base: '4rem'}} as={FaEtsy}></Icon>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Endorsements;
