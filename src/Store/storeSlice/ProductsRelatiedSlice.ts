import { InitialState } from "@/Types/store.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialState = {
  selectedTab: 1,
};
const RelatedProductSlice = createSlice({
  name: "RelatedProducts",
  initialState,
  reducers: {
    setSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});
export default RelatedProductSlice.reducer;
export const { setSelectedTab } = RelatedProductSlice.actions;
