import { Button, Flex } from '@chakra-ui/react';

import { useAppDispatch } from '../../../app/hooks';
import { addCart } from '../../../lib/cart/cartSlice';
import useUpdateToast from '../../../lib/hooks/useUpdateToast';

// Add to cart button. Dispatches to reducer
// Plus Toast!
const AddBtn = ({ spell }) => {
  const dispatch = useAppDispatch();
  const toast = useUpdateToast();
  const attemptAdd = () => {
    dispatch(addCart(spell));
  };

  return (
    <Flex>
      <Button
        onClick={() => {
          attemptAdd();
          toast('Spell Added to Cart!');
        }}
        bgColor='dark'
        color='white'
        fontFamily='stone'
      >
        ADD TO CART
      </Button>
    </Flex>
  );
};

export default AddBtn;
