import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./ThemeSlice";

const store = configureStore({
   reducer: {
      themeSlice: ThemeSlice,
   },
});

export default store;

const subscribe = store.subscribe(() => {
   console.log(store.getState());
});
