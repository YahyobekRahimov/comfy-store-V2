import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
   name: "Products",
   initialState: [],
   reducers: {
      addProduct: (state, { payload }) => {
         if (payload.length) {
            state.concat(payload);
         } else {
            state.push(payload);
         }
      },
   },
});

export default ProductsSlice.reducer;

export const { addProduct } = ProductsSlice.actions;
