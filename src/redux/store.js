import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";
import FilteredProductsSlice from "./FilteredProductsSlice";

const store = configureStore({
   reducer: {
      themeSlice: ThemeSlice,
      filteredProducts: FilteredProductsSlice,
   },
});

export default store;

const subscribe = store.subscribe(() => {
   console.log(store.getState());
});
