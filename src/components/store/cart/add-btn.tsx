import { Button, Flex } from '@chakra-ui/react';
import { useAppDispatch } from '../../../app/hooks';
import { addCart } from '../../../lib/cart/cartSlice';

// Add to cart button. Dispatches to reducer
const AddBtn = ({ spell }) => {
  const dispatch = useAppDispatch();
  const attemptAdd = () => {
    dispatch(addCart(spell));
  };
  return (
    <Flex>
      <Button
        onClick={attemptAdd}
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
