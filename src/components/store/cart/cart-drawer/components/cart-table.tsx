import { Table, TableContainer, Tbody, Tr } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Item } from '../../../../../lib/cart/cartSlice';
import CartSpellCard from './cart-spell-card';

// Render item table for cart
const CartTable = ({ cartItems }) => {
  const scale = useBreakpointValue({ md: 55, base: 35 });
  const spellCards = cartItems.map((item: Item) => (
    <Tr overflow='scroll' key={item.spell._id}>
      <CartSpellCard
        quantity={item.quantity}
        spell={item.spell}
        scale={scale}
      />
    </Tr>
  ));
  return (
    <TableContainer p={{ base: '0', md: '2rem' }} boxShadow='md' h='full'>
      <Table variant='simple'>
        <Tbody>{spellCards}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
