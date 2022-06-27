import {
  Button,
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useAppSelector } from '../../../../app/hooks';
import {
  selectCartItems,
  selectCartQuantity,
} from '../../../../lib/cart/cartSlice';
import CartTable from './components/cart-table';
import EmptyCartBtn from './components/empty-cart-btn';

const CartDrawer = () => {
  const cartQuantity = useAppSelector(selectCartQuantity);
  const cartItems = useAppSelector(selectCartItems);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const router = useRouter();

  return (
    <Flex>
      <Button
        ref={btnRef}
        variant={{base: 'ghost', lg: 'outline'}}
        leftIcon={<FiShoppingBag />}
        onClick={onOpen}
        colorScheme='dark'
        disabled={cartQuantity === 0}
        w='full'
      >
        <Text fontSize={{base: '.8rem', lg: '1rem'}}>Cart</Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size='lg'
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontFamily='stone' textAlign='center' fontSize='2rem'>
            Your cart
          </DrawerHeader>

          <DrawerBody>
            <CartTable
              cartItems={cartItems}
            />
          </DrawerBody>
          <DrawerFooter>
            <Flex gap='2rem'>
              <EmptyCartBtn cartQuantity={cartQuantity} />
              <Button
                onClick={() => {
                  onClose();
                  router.push('/store/checkout');
                }}
                bgColor='dark'
                fontFamily='normal'
                color='white'
                disabled={cartQuantity === 0}
              >
                Checkout
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default CartDrawer;
