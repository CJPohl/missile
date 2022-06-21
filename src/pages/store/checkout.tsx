import { useSession } from 'next-auth/react';
import { useAppSelector } from '../../app/hooks';
import NextLink from 'next/link';
import {
  Item,
  selectCartItems,
  selectCartPrice,
  selectCartQuantity,
} from '../../lib/cart/cartSlice';
import useSignIn from '../../lib/hooks/useSignIn';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import useSchool from '../../lib/hooks/useSchool';
import { FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import getStripe from '../../lib/payment/stripe';

const Checkout = () => {
  // Handle required Auth
  const { handleNotAuth } = useSignIn();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      handleNotAuth();
    },
  });

  const router = useRouter();

  // If cart empty redirect
  useEffect(() => {
    if (cartItems.length === 0) router.push('/');
  }, []);

  // Get cart info
  const cartQuantity = useAppSelector(selectCartQuantity);
  const cartTotal = useAppSelector(selectCartPrice);
  const cartItems = useAppSelector(selectCartItems);

  const handleSubmit = async () => {
    // Checkout session

    const { data: checkoutSession } = await axios.post(
      '/api/checkout_sessions',
      { amount: cartTotal, quantity: cartQuantity }
    );
    console.log(checkoutSession.id);
    // Checkout redirect
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    console.warn(error.message);
  };

  const items = cartItems.map((item: Item) => {
    const school = useSchool(item.spell.school, 55);
    return (
      <Flex key={item.spell._id} alignItems='center' gap='1rem'>
        <Text>{item.quantity + 'x'}</Text>
        <Box>{school}</Box>
        <NextLink
          href={`http://localhost:3000/store/spells/single/${item.spell._id}`}
        >
          <Text
            cursor='pointer'
            noOfLines={1}
            color='dark'
            fontSize='1rem'
            fontFamily='normal'
          >
            {item.spell.name}
          </Text>
        </NextLink>
      </Flex>
    );
  });

  return (
    <Flex justifyContent='center' fontFamily='normal' h='90vh' my='1rem'>
      <Grid
        w='full'
        maxW='container.xl'
        gridTemplateColumns='1fr 1fr'
        gap='1rem'
      >
        <GridItem boxShadow='md' p='2rem'>
          <Flex direction='column' w='full' alignItems='center' gap='2rem'>
            <Heading fontFamily='normal' color='dark'>
              Your Cart
            </Heading>
            <Flex direction='column' gap='.5rem'>
              {items}
            </Flex>
          </Flex>
        </GridItem>
        <GridItem boxShadow='md'>
          <Flex gap='1rem'>
            <Button bgColor='dark' color='white'>
              <NextLink href='/'>Return</NextLink>
            </Button>
            <Button onClick={handleSubmit} bgColor='dark' color='white'>
              Purchase with Stipe
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Checkout;
