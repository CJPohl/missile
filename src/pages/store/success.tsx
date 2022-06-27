import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { emptyCart } from '../../lib/cart/cartSlice';

// Success page redirected from StripeCheckout
const Success = () => {
  const dispatch = useAppDispatch();

  // On first load, clear cart
  useEffect(() => {
    dispatch(emptyCart());
  }, []);

  return (
    <Flex
      h={{
        base: 'calc(100vh - 12rem)',
        sm: 'calc(100vh - 6rem)',
        md: 'calc(100vh - 8rem)',
      }}
      direction='column'
      alignItems='center'
      justifyContent='space-evenly'
      px={{ base: '2rem', xl: '0' }}
    >
      <Heading
        as='h2'
        textAlign='center'
        fontFamily='stone'
        color='dark'
        fontSize='4rem'
      >
        Purchase Success
      </Heading>
      <Flex
        borderColor='dark'
        border='2px'
        p='2rem'
        w={{ base: 'auto', xl: 'container.xl' }}
        borderRadius='1rem'
      >
        <Text
          fontFamily='normal'
          fontSize={{ base: '1.3rem', xl: '1.8rem' }}
          fontWeight='light'
          textAlign='center'
          color='dark'
        >
          Congratulations! If this is your first purchase with us, you have
          embarked on a new journey towards intellectual self fulfillment.
          People like you are curious, tinkerers, and passionate for exploring
          the uncharted. Follow us for more updates!
        </Text>
      </Flex>
      <Button
        bgColor='dark'
        fontFamily='normal'
        fontSize='1.4rem'
        p='1.2rem'
        color='white'
      >
        <NextLink href='http://localhost:3000'>
          <Link _hover={{ textDecoration: 'none' }}>Return</Link>
        </NextLink>
      </Button>
    </Flex>
  );
};

export default Success;
