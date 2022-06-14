import { Button, Flex, Heading, Icon, useToast } from '@chakra-ui/react';

import { useAppDispatch } from '../../../app/hooks';
import { addCart } from '../../../lib/cart/cartSlice';
import { BsBagPlus } from 'react-icons/bs';

// Add to cart button. Dispatches to reducer
// Plus Toast!
const AddBtn = ({ spell }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const attemptAdd = () => {
    dispatch(addCart(spell));
  };

  return (
    <Flex>
      <Button
        onClick={() => {
          attemptAdd();
          toast({
            duration: 2000,
            isClosable: true,
            render: () => (
              <Flex
                p='1.3rem'
                alignItems='center'
                gap='1rem'
                borderRadius='1rem'
                bgColor='green'
                color='white'
              >
                <Icon h={5} w={5} as={BsBagPlus} />
                <Heading
                  as='h5'
                  fontSize='1.3rem'
                  fontFamily='stone'
                  fontWeight='md'
                >
                  Cart Updated!
                </Heading>
              </Flex>
            ),
          });
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
