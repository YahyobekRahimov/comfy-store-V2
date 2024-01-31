import { createSlice } from "@reduxjs/toolkit";

const FilteredProductsSlice = createSlice({
   name: "filtered products",
   initialState: [],
   reducers: {
      addProducts: (state, { payload }) => {
         state = payload;
         return state;
      },
      removeAllProducts: (state) => {
         state = [];
         return state;
      },
   },
});

export const { addProducts } = FilteredProductsSlice.actions;

export default FilteredProductsSlice.reducer;
