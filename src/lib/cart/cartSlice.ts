import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { SpellQuery } from '../models/Spell';

// item type
export interface Item {
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

// Cart state reducer in CRUD structure
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
    // Empty user's cart
    emptyCart: (state) => {
      state.items = [];
    },
    // Delete item from cart
    deleteItem: (state, action: PayloadAction<SpellQuery>) => {
      const index = state.items.findIndex(
        (item) => item.spell._id === action.payload._id
      );
      state.items.splice(index, 1);
    },
    // Update quantity of item
    updateItem: (state, action: PayloadAction<Item>) => {
      const item = state.items.find(
        (item) => item.spell._id === action.payload.spell._id
      );
      item.quantity = action.payload.quantity;

      // Delete item if quantity is 0
      if (item.quantity === 0) {
        const index = state.items.findIndex(
          (item) => item.spell._id === action.payload.spell._id
        );
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addCart, emptyCart, deleteItem, updateItem } = cartSlice.actions;

// Cart quantity selector
export const selectCartQuantity = (state: RootState) =>
  state.cart.items.reduce((prev, curr) => prev + curr.quantity, 0);

// Cart total price selector
export const selectCartPrice = (state: RootState) =>
  state.cart.items.reduce(
    (prev, curr) => prev + curr.spell.price * curr.quantity,
    0
  );

// Cart items
export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
