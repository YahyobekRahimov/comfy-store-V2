import CartIcon from "/src/assets/icons/shopping-cart.svg?react";

export default function CartButton() {
   return (
      <button className="btn btn-ghost btn-circle relative">
         <span className="badge badge-primary badge-xs py-2 absolute top-0 right-0 z-10">
            23
         </span>
         <CartIcon className="fill-current absolute w-6" />
      </button>
   );
}
