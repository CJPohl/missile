import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useRef } from 'react';

const useDisclaimer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const confirmRef = useRef();

  const disclaimer = (
    <AlertDialog
      leastDestructiveRef={confirmRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent fontFamily='normal' bgColor='dark' color='white'>
          <AlertDialogHeader textAlign='center'>
            Site Disclaimer
          </AlertDialogHeader>
          <AlertDialogBody>
            <Flex direction='column' gap='1rem'>
              <Text>
                Missile is an online e-commerce magical spell emporium with data
                scraped from the Dungeons and Dragons 5e API. Even though it
                might appear obvious to most, this e-commerce site is for
                portfolio purposes only and does not exist for profit to its
                creator. The Stripe payment API is for testing only and is not
                activated for real transactions.
              </Text>
              <Text>
                For information on testing the site's payment implementation,
                please review{' '}
                <NextLink href='https://stripe.com/docs/testing'>
                  <Link fontWeight='bold' px='.2rem' fontSize='1.1rem'>
                    this
                  </Link>
                </NextLink>{' '}
                documentation to learn how to create mock transactions through
                Stripe Checkout.
              </Text>
            </Flex>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Flex w='full' justifyContent='center'>
              <Button
                bg='white'
                color='dark'
                ref={confirmRef}
                onClick={onClose}
              >
                I Understand
              </Button>
            </Flex>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );

  useEffect(() => {
    onOpen();
  }, []);

  return {
    disclaimer,
  };
};

export default useDisclaimer;
