import { createSlice } from "@reduxjs/toolkit";
import { BookType } from "../../types/books";
import { showAlert } from "./alertSlice";
import { AppDispatch, RootState } from "../store";

export interface CartState {
  cartItems: BookType[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //action: PayloadAction<BookType>
      const isExistingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!isExistingItem) {
        state.cartItems.push(action.payload);
        showAlert("Item Added Successfully!");
      } else {
        showAlert("Item Already Exists!");
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const addToCartWithAlert =
  (book: BookType) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const isExistingItem = state.cart.cartItems.find(
      (item: BookType) => item._id === book._id
    );

    if (!isExistingItem) {
      dispatch(addToCart(book)); // Add item to cart
      dispatch(showAlert("Item Added Successfully!")); // Show success alert
    } else {
      dispatch(showAlert("Item Already Exists!")); // Show duplicate alert
    }
  };

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
