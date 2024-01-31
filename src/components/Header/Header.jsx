import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import ThemeController from "./ThemeController";
import CartButton from "./CartButton";
import MenuButton from "./MenuButton";

export default function Header() {
   return (
      <header>
         <section className="bg-neutral text-neutral-content">
            <Container>
               <div className="flex items-center justify-center gap-x-6 py-2 sm:justify-end">
                  <Link
                     className="link link-hover text-xs sm:text-sm"
                     to="/login"
                  >
                     Sign in / Guest
                  </Link>
                  <Link
                     className="link link-hover text-xs sm:text-sm"
                     to="/register"
                  >
                     Create Account
                  </Link>
               </div>
            </Container>
         </section>
         <section className="navbar bg-base-200">
            <Container>
               <div className="flex w-full justify-between">
                  <Link
                     to="/"
                     className="hidden lg:flex btn btn-primary justify-center text-3xl items-center active"
                  >
                     C
                  </Link>
                  <ul
                     tabIndex={0}
                     className="menu menu-horizontal hidden lg:flex"
                  >
                     <li>
                        <NavLink to="/">Home</NavLink>
                     </li>
                     <li>
                        <NavLink to="/about">About</NavLink>
                     </li>
                     <li>
                        <NavLink to="/products">Products</NavLink>
                     </li>
                     <li>
                        <NavLink to="/cart">Cart</NavLink>
                     </li>
                  </ul>
                  <div className="lg:hidden">
                     <MenuButton />
                  </div>
                  <div className="flex items-center gap-4">
                     <ThemeController />
                     <CartButton />
                  </div>
               </div>
            </Container>
         </section>
      </header>
   );
}
