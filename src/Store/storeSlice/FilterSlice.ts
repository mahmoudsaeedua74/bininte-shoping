import { FilterState } from "@/Types/store.types";
import { createSlice } from "@reduxjs/toolkit";
const initialState :FilterState= {
  category: "0",
  priceMin: 10,
  priceMax: 100,
  layoutGrid: true,
  layoutSlice: false,
  sortByName: "az",
  show: 12,
};
const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPriceMin(state, action) {
      state.priceMin = action.payload;
    },
    setPriceMax(state, action) {
      state.priceMax = action.payload;
    },
    setLayoutGrid(state) {
      state.layoutGrid = true;
      state.layoutSlice = false; 
    },
    setLayoutSlice(state) {
      state.layoutGrid = false; 
      state.layoutSlice = true;
    },
    setSortByName(state, action) {
      state.sortByName = action.payload;
    },
   
    setShow(state, action) {
      state.show = action.payload;
    },
  },
});
export default filterSlice.reducer;
export const {
  setLayoutGrid,
  setLayoutSlice,
  setSortByName,
  setShow,
  setCategory,
  setPriceMin,
  setPriceMax,
} = filterSlice.actions;
