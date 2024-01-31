import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class",
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {},
      },
   },
   plugins: [daisyui],
   daisyui: {
      themes: ["winter", "dracula"],
   },
};
