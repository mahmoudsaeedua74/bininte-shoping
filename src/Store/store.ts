import { configureStore } from "@reduxjs/toolkit";
import RelatedProductSlice from "./storeSlice/ProductsRelatiedSlice";
import filterSlice from "./storeSlice/FilterSlice";
import cartSlice from "./storeSlice/cartSlice";
export const store = configureStore({
  reducer: { RelatedProductSlice, filterSlice ,cartSlice},
});
type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type RootDispatch = AppStore["dispatch"];
