import { Box, CloseButton, IconButton } from '@chakra-ui/react';
import { FiX } from 'react-icons/fi';
import { useAppDispatch } from '../../../../../app/hooks';
import { deleteItem } from '../../../../../lib/cart/cartSlice';
import useUpdateToast from '../../../../../lib/hooks/useUpdateToast';

// Dispatch delete item in cart
const DeleteBtn = ({ spell }) => {
  const dispatch = useAppDispatch();
  const toast = useUpdateToast();

  const attemptDelete = () => {
    dispatch(deleteItem(spell));
  };
  return (
    <Box
      onClick={() => {
        attemptDelete();
        toast('Spell Removed From Cart');
      }}
    >
      <IconButton
        aria-label='delete item'
        size='sm'
        bgColor='dark'
        color='white'
        icon={<FiX />}
      />
    </Box>
  );
};
export default DeleteBtn;
