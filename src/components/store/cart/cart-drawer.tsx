import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import {
  selectCartPrice,
  selectCartQuantity,
} from '../../../lib/cart/cartSlice';
import CartSpellCard from './cart-spell-card';

const CartDrawer = () => {
  const cartQuantity = useAppSelector(selectCartQuantity);
  const cartTotal = useAppSelector(selectCartPrice);
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const spellCards = cartItems.map((item) => (
    <Tr key={item.spell._id}>
      <CartSpellCard quantity={item.quantity} spell={item.spell} scale={55} />
    </Tr>
  ));
  return (
    <Flex>
      <Button
        ref={btnRef}
        variant='outline'
        leftIcon={<FiShoppingBag />}
        onClick={onOpen}
        colorScheme='dark'
      >
        Cart
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
            <TableContainer p='2rem' boxShadow='md' h='full'>
              <Table variant='simple'>
                <TableCaption>
                  <Flex gap='2rem' fontFamily='normal' color='dark'>
                    <Text>{cartQuantity + ' items in cart'}</Text>
                    <Text>{'Total: $' + cartTotal}</Text>
                  </Flex>
                </TableCaption>
                <Tbody>{spellCards}</Tbody>
              </Table>
            </TableContainer>
          </DrawerBody>
          <DrawerFooter>
            <Flex gap='2rem'>
              <Button>Empty Cart</Button>
              <Button>Checkout</Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default CartDrawer;
