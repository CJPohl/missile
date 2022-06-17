import {
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Text,
  Tr,
} from '@chakra-ui/react';
import { Item } from '../../../../../lib/cart/cartSlice';
import CartSpellCard from './cart-spell-card';

// Render item table for cart
const CartTable = ({ cartItems, cartQuantity, cartTotal }) => {
  const spellCards = cartItems.map((item: Item) => (
    <Tr key={item.spell._id}>
      <CartSpellCard quantity={item.quantity} spell={item.spell} scale={55} />
    </Tr>
  ));
  return (
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
  );
};

export default CartTable;
