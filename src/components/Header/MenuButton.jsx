import { NavLink } from "react-router-dom";
import MenuIcon from "/src/assets/icons/menu-right-alt.svg?react";

export default function MenuButton() {
   return (
      <div className="dropdown">
         <button role="button" tabIndex={0} className="btn btn-ghost">
            <MenuIcon />
         </button>
         <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
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
      </div>
   );
}
