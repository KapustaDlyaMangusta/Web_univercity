import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  isEmpty: true,
  totalPrice : 0,
  cartItems: []
}

const recalculatePrice = (items) => {
  return items.reduce((sum, item) => sum + item.totalItemPrice, 0);
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      state.totalPrice = recalculatePrice(state.cartItems);
      state.isEmpty = state.cartItems.length === 0;
    },
    removeFromCart(state, action) {
      state.cartItems.splice(state.cartItems.findIndex((element) => {
        return element.id === action.payload;
      }), 1);

      state.totalPrice = recalculatePrice(state.cartItems);
      state.isEmpty = state.cartItems.length === 0;
    },
    updateItemQuantity(state, action) {
      const item = state.cartItems.find(item => item.id = action.payload.id);
      item.quantity = action.payload.quantity;
      item.totalItemPrice = item.price * item.quantity;

      state.totalPrice = recalculatePrice(state.cartItems);
    },
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
