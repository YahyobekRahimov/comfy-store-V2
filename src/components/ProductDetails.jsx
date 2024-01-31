import { useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Container from "./Container";
import { useEffect, useState } from "react";

export default function ProductDetails() {
   const [product, setProduct] = useState();
   const location = useLocation();
   let id = location.pathname.split("/").at(-1);
   useEffect(() => {
      console.log(product);
   }, [product]);
   useEffect(() => {
      fetch(
         `https://strapi-store-server.onrender.com/api/products/${id}`
      )
         .then((data) => data.json())
         .then((json) => setProduct(json.data.attributes))
         .catch((err) => console.log(err));
   }, []);

   return (
      <>
         <Header />
         <main>
            <Container>
               {product?.title && (
                  <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                     <img src={product.image} alt={product.title} />
                     <div>
                        <h1 className="capitalize text-3xl font-bold">
                           {product.title}
                        </h1>
                        <h4 className="text-xl text-neutral-content font-bold mt-2">
                           {product.company}
                        </h4>
                        <p className="mt-3 text-xl">
                           ${product.price}
                        </p>
                        <p className="mt-6 leading-8">
                           {product.description}
                        </p>
                        <div className="mt-6">
                           <h4>Colors</h4>
                           <div></div>
                        </div>
                     </div>
                  </div>
               )}
            </Container>
         </main>
      </>
   );
}
