import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
   name: "Theme",
   initialState: "",
   reducers: {
      toggleTheme: (state) =>
         state == "dracula" ? "winter" : "dracula",
   },
});

export default ThemeSlice.reducer;

export const { toggleTheme } = ThemeSlice.actions;
