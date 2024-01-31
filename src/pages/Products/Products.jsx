import Container from "../../components/Container";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import { useSelector } from "react-redux";

export default function Products() {
   const [products, setProducts] = useState([]);
   const [page, setPage] = useState(1);
   const [metaData, setMetaData] = useState({});
   const [pageSize, setPageSize] = useState([]);

   const filteredProducts = useSelector(
      (state) => state.filteredProducts
   );
   console.log("component run once");
   let productResult;
   if (filteredProducts?.data?.length) {
      productResult = filteredProducts.data;
   }

   let count;
   if (products?.length) {
      count = filteredProducts?.meta?.pagination?.total;
   }
   if (filteredProducts?.meta?.pagination?.total == undefined) {
      count = metaData?.pagination?.total;
   }

   useEffect(() => {
      console.log("useEffect run once");
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
                  <Filter
                     categories={metaData.categories}
                     companies={metaData.companies}
                  />
                  <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                     <h4 className="font-medium text-md">
                        {count} products
                     </h4>
                  </div>
                  <div>
                     <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {!productResult
                           ? products.map((product) => (
                                <ProductCard
                                   product={product.attributes}
                                   id={product.id}
                                   key={product.id}
                                />
                             ))
                           : productResult.map((product) => (
                                <ProductCard
                                   product={product.attributes}
                                   id={product.id}
                                   key={product.id}
                                />
                             ))}
                        {}
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
                        {pageSize &&
                           pageSize.map((num) => (
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
