import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Select from "/src/components/Select";
import { useRef, useState } from "react";
import { addProducts } from "../../redux/FilteredProductsSlice";

export default function Filter({ categories, companies }) {
   const theme = useSelector((state) => state.themeSlice);
   const dispatch = useDispatch();

   const [price, setPrice] = useState(1000);
   const [shipping, setShipping] = useState(false);

   const searchRef = useRef(null);
   const categoryRef = useRef(null);
   const companyRef = useRef(null);
   const orderRef = useRef(null);

   function handleSubmit(e) {
      e.preventDefault();
      let shippingRes = shipping ? "&shipping=true" : "";
      const link = `https://strapi-store-server.onrender.com/api/products?search=${
         searchRef.current?.value
      }&category=${categoryRef.current?.value}&company=${
         companyRef.current?.value
      }&order=${orderRef.current?.value}&price=${
         price * 100
      }${shippingRes}`;
      console.log(link);
      fetch(link)
         .then((res) => res.json())
         .then((json) => dispatch(addProducts(json)))
         .catch((err) => console.log(err));
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
      >
         <div className="form-control">
            <label htmlFor="search" className="label">
               <span className="label-text capitalize">
                  search product
               </span>
            </label>
            <input
               type="search"
               name="search"
               className="input input-bordered input-sm"
               ref={searchRef}
            ></input>
         </div>
         <Select
            id="category"
            label="select category"
            name="category"
            inputRef={categoryRef}
            options={
               categories &&
               categories.map((category, index) => (
                  <option
                     className="capitalize"
                     key={index}
                     value={category}
                  >
                     {category}
                  </option>
               ))
            }
         />
         <Select
            id="company"
            label="select company"
            name="company"
            inputRef={companyRef}
            options={
               companies &&
               companies.map((company, index) => (
                  <option
                     className="capitalize"
                     key={index}
                     value={company}
                  >
                     {company}
                  </option>
               ))
            }
         />
         <Select
            id="order"
            label="Sort by"
            name="order"
            inputRef={orderRef}
            options={
               <>
                  <option value="a-z">a-z</option>
                  <option value="z-a">z-a</option>
                  <option value="high">high</option>
                  <option value="low">low</option>
               </>
            }
         />
         <div className="form-control">
            <label htmlFor="search" className="label">
               <span className="label-text capitalize">
                  search product
               </span>
               <span>${price}</span>
            </label>
            <input
               type="range"
               name="price"
               min="0"
               max="1000"
               className="range range-primary range-sm"
               step="10"
               value={price}
               onChange={(e) => setPrice(e.target.value)}
            />
            <div className="w-full flex justify-between text-xs px-2 mt-2">
               <span className="font-bold text-md">0</span>
               <span className="font-bold text-md">
                  Max : $1,000.00
               </span>
            </div>
         </div>
         <div className="form-control items-center">
            <label
               htmlFor="shipping"
               className="label cursor-pointer"
            >
               <span className="label-text capitalize">
                  free shipping
               </span>
            </label>
            <input
               type="checkbox"
               name="shipping"
               className="checkbox checkbox-primary checkbox-sm"
               checked={shipping}
               onChange={() => setShipping(!shipping)}
            />
         </div>
         <button
            type="submit"
            className={`btn btn-primary btn-sm uppercase ${
               theme == "winter" ? "text-black" : "text-white"
            }`}
         >
            search
         </button>
         <Link
            className={`btn btn-accent btn-sm uppercase ${
               theme == "winter" ? "text-black" : "text-white"
            }`}
            href="/products"
         >
            reset
         </Link>
      </form>
   );
}
