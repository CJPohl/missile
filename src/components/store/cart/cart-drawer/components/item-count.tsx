import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useAppDispatch } from '../../../../../app/hooks';
import { updateItem } from '../../../../../lib/cart/cartSlice';
import useUpdateToast from '../../../../../lib/hooks/useUpdateToast';

const ItemCount = ({ item }) => {
  const dispatch = useAppDispatch();
  const toast = useUpdateToast();
  // Update cart quantity on click
  const handleUpdate = (type: string) => {
    if (type === 'inc') {
      dispatch(updateItem({ spell: item.spell, quantity: item.quantity + 1 }));
    } else {
      dispatch(updateItem({ spell: item.spell, quantity: item.quantity - 1 }));
    }
  };
  return (
    <Flex alignItems='center' gap='1rem' p='.5rem'>
      <Flex direction='column' gap='.5rem'>
        <IconButton
          size={{base: 'xs', md: 'sm'}}
          bgColor='dark'
          color='white'
          aria-label='add item quantity'
          icon={<FiChevronUp />}
          onClick={() => {
            handleUpdate('inc');
            toast('Cart Quantity Updated');
          }}
        />
        <IconButton
          size={{base: 'xs', md: 'sm'}}
          bgColor='dark'
          color='white'
          aria-label='add item quantity'
          icon={<FiChevronDown />}
          onClick={() => {
            handleUpdate('dec');
            toast('Cart Quantity Updated');
          }}
        />
      </Flex>
      <Text>{item.quantity + 'x'}</Text>
    </Flex>
  );
};

export default ItemCount;
