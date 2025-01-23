import { CartState } from "@/Types/store.types";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getInitialState = (): CartState => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return {
      cart: savedCart ? JSON.parse(savedCart) : [],
    };
  }
  return { cart: [] };
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      toast.success("Item added to cart");
      if (typeof window !== 'undefined') {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
      toast.success("Item removed from cart");
      if (typeof window !== 'undefined') {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);
      toast.success("Item added to cart");
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
     if (typeof window !== 'undefined') {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
        toast.success("Item removed from cart");
        if (item.quantity === 0) {
          cartSlice.caseReducers.deleteItem(state, action);
        }
      }
     if (typeof window !== 'undefined') {
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    clearItem(state) {
      toast.success("your cart is cleared");
      state.cart = [];
    },
  },
});
export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  clearItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export const getCarts = (state: { cartSlice: CartState }) =>
  state.cartSlice.cart;
export const getTotalQuantity = (state: { cartSlice: CartState }) =>
  state.cartSlice.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (state: { cartSlice: CartState }) =>
  state.cartSlice.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById =
  (id: string) => (state: { cartSlice: CartState }) =>
    state.cartSlice.cart.find((item) => item.productId === id)?.quantity ?? 0;
