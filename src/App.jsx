import "./App.css";
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Home />,
      },
      {
         path: "about",
         element: <About />,
      },
      {
         path: "products",
         element: <Products />,
      },
      {
         path: "cart",
         element: <Cart />,
      },
   ]);
   return <RouterProvider router={router} />;
}

export default App;
