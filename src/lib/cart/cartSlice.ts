import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { SpellQuery } from '../models/Spell';

// item type
interface Item {
  spell: SpellQuery;
  quantity: number;
}

// State type
interface CartState {
  items: Item[];
}

// Init state
const initialState: CartState = {
  items: [],
};

// Cart state reducer
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Search through cart and find dups and add/increment
    addCart: (state, action: PayloadAction<SpellQuery>) => {
      const index = state.items.findIndex(
        (item) => item.spell._id === action.payload._id
      );
      if (index === -1) {
        const spell: Item = { spell: action.payload, quantity: 1 };
        state.items.push(spell);
      } else {
        state.items[index].quantity++;
      }
    },
  },
});

export const { addCart } = cartSlice.actions;

// Cart quantity selector
export const selectCartQuantity = (state: RootState) =>
  state.cart.items.reduce((prev, curr) => prev + curr.quantity, 0);

// Cart total price selector
export const selectCartPrice = (state: RootState) =>
  state.cart.items.reduce(
    (prev, curr) => prev + curr.spell.price * curr.quantity,
    0
  );

export default cartSlice.reducer;
