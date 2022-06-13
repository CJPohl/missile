import { Flex, Heading, Icon } from '@chakra-ui/react';
import { FaMedium, FaReddit, FaPinterest, FaEtsy } from 'react-icons/fa';

const Endorsements = () => {
  return (
    <Flex
      py='5rem'
      direction='column'
      alignItems='center'
      gap='6rem'
      bgColor='beige'
    >
      <Heading as='h3' fontSize='2rem' fontFamily='news' color='darkgray'>
        "Who would of thought a bunch of old wizards would of made the jocks
        nervous..."
      </Heading>
      <Flex gap='10rem'>
        <Icon color='dark' h='7rem' w='7rem' as={FaMedium}></Icon>
        <Icon color='dark' h='7rem' w='7rem' as={FaReddit}></Icon>
        <Icon color='dark' h='7rem' w='7rem' as={FaPinterest}></Icon>
        <Icon color='dark' h='7rem' w='7rem' as={FaEtsy}></Icon>
      </Flex>
    </Flex>
  );
};

export default Endorsements;
