import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  isEmpty: true,
  totalPrice : 0,
  cartItems: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      state.totalPrice = state.cartItems.reduce((sum, item) => +sum + +item.totalItemPrice, 0).toFixed(2);
      state.isEmpty = state.cartItems.length === 0;
    },
    removeFromCart(state, action) {
      state.cartItems.splice(state.cartItems.findIndex((element) => {
        return element.id === action.payload;
      }), 1);

      state.totalPrice = state.cartItems.length > 0 ? state.cartItems.reduce((sum, item) => +sum + +item.totalItemPrice, 0).toFixed(2) : 0;
      state.isEmpty = state.cartItems.length === 0;
    },
    increaseItemQuantity(state,action) {
      const item = state.cartItems.find(item => item.id = action.payload);
      item.quantity += 1;
      item.totalItemPrice = item.price * item.quantity;

      state.totalPrice = state.cartItems.reduce((sum, item) => +sum + +item.totalItemPrice, 0).toFixed(2);
    },
    decreaseItemQuantity(state, action){
      const item = state.cartItems.find(item => item.id = action.payload);
      item.quantity -= 1;
      item.totalItemPrice = item.price * item.quantity;

      state.totalPrice = state.cartItems.reduce((sum, item) => +sum + +item.totalItemPrice, 0).toFixed(2);
    },
    clear(state, action){
      state.totalPrice = 0;
      state.cartItems = [];
      state.isEmpty = true;
    }
  }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
