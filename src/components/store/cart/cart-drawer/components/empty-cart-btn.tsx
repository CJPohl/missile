import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useAppDispatch } from '../../../../../app/hooks';
import { emptyCart } from '../../../../../lib/cart/cartSlice';

const EmptyCartBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const dispatch = useAppDispatch();
  const attemptEmpty = () => {
    dispatch(emptyCart());
  };

  return (
    <>
      <Button color='white' fontFamily='normal' bgColor='dark' onClick={onOpen}>
        Empty Cart
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Empty Cart</AlertDialogHeader>
            <AlertDialogBody>
              Do you really want to empty your cart?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Flex
                w='full'
                justifyContent='center'
                gap='1rem'
                color='white'
                fontFamily='normal'
              >
                <Button ref={cancelRef} onClick={onClose} bgColor='dark'>
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    attemptEmpty();
                    onClose();
                  }}
                  bgColor='dark'
                >
                  Empty Cart
                </Button>
              </Flex>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default EmptyCartBtn;
