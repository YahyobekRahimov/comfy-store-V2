import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header/Header";
import Select from "../../components/Select";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";

export default function Products() {
   const theme = useSelector((state) => state.themeSlice);
   const [products, setProducts] = useState([]);
   const [page, setPage] = useState(1);
   const [metaData, setMetaData] = useState({});
   const [pageSize, setPageSize] = useState([]);

   useEffect(() => {
      fetch(
         `https://strapi-store-server.onrender.com/api/products?page=${page}`
      )
         .then((data) => data.json())
         .then((json) => {
            setMetaData(json.meta);
            setProducts(json.data);
            let arr = [];
            for (
               let i = 1;
               i <= json.meta.pagination.pageCount;
               i++
            ) {
               arr.push(i);
            }
            setPageSize(arr);
         })
         .catch((err) => console.log(err));
   }, [page]);

   return (
      <>
         <Header />
         <main>
            <section className="py-20">
               <Container>
                  <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
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
                        ></input>
                     </div>
                     <Select
                        id="category"
                        label="select category"
                        name="category"
                        options={
                           <>
                              <option value="all">All</option>
                              <option value="something">
                                 Something
                              </option>
                           </>
                        }
                     />
                     <Select
                        id="company"
                        label="select company"
                        name="company"
                        options={
                           <>
                              <option value="all">All</option>
                              <option value="something">
                                 Something
                              </option>
                           </>
                        }
                     />
                     <Select
                        id="order"
                        label="Sort by"
                        name="order"
                        options={
                           <>
                              <option value="all">All</option>
                              <option value="something">
                                 Something
                              </option>
                           </>
                        }
                     />
                     <div className="form-control">
                        <label htmlFor="search" className="label">
                           <span className="label-text capitalize">
                              search product
                           </span>
                           <span>$1000</span>
                        </label>
                        <input
                           type="range"
                           name="price"
                           min="0"
                           max="100000"
                           className="range range-primary range-sm"
                           step="1000"
                        />
                        <div className="w-full flex justify-between text-xs px-2 mt-2">
                           <span className="font-bold text-md">
                              0
                           </span>
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
                        />
                     </div>
                     <button
                        type="submit"
                        className={`btn btn-primary btn-sm uppercase ${
                           theme == "winter"
                              ? "text-black"
                              : "text-white"
                        }`}
                     >
                        search
                     </button>
                     <Link
                        className={`btn btn-accent btn-sm uppercase ${
                           theme == "winter"
                              ? "text-black"
                              : "text-white"
                        }`}
                        href="/products"
                     >
                        reset
                     </Link>
                  </form>
                  <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                     <h4 className="font-medium text-md">
                        {products.length &&
                           `${metaData.pagination.total} products`}
                     </h4>
                  </div>
                  <div>
                     <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {products &&
                           products.map((product) => (
                              <ProductCard
                                 product={product.attributes}
                                 id={product.id}
                                 key={product.id}
                              />
                           ))}
                     </div>
                  </div>
                  <div className="mt-16 flex justify-end">
                     <div className="join">
                        <button
                           onClick={() => setPage(page - 1)}
                           className="btn btn-xs sm:btn-md join-item"
                        >
                           Prev
                        </button>
                        {pageSize.map((num) => (
                           <button
                              key={num}
                              onClick={() => setPage(num)}
                              className={`btn btn-xs sm:btn-md border-none join-item ${
                                 num == page
                                    ? "bg-base-300 border-base-300"
                                    : ""
                              }`}
                           >
                              {num}
                           </button>
                        ))}
                        <button
                           onClick={() => setPage(page + 1)}
                           className="btn btn-xs sm:btn-md join-item"
                        >
                           Next
                        </button>
                     </div>
                  </div>
               </Container>
            </section>
         </main>
      </>
   );
}
