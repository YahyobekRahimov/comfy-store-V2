import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header/Header";

// Images
import Hero1 from "/src/assets/images/hero1-deae5a1f.webp";
import Hero2 from "/src/assets/images/hero2-2271e3ad.webp";
import Hero3 from "/src/assets/images/hero3-a83f0357.webp";
import Hero4 from "/src/assets/images/hero4-4b9de90e.webp";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

export default function Home() {
   const [featuredProducts, setFeaturedProducts] = useState([]);
   useEffect(() => {
      fetch(
         "https://strapi-store-server.onrender.com/api/products?featured=true"
      )
         .then((response) => response.json())
         .then((json) => setFeaturedProducts(json.data))
         .catch((err) => console.log(err));
   }, []);

   useEffect(() => {
      console.log(featuredProducts);
   }, [featuredProducts]);
   return (
      <>
         <Header />
         <main>
            <section className="py-20">
               <Container className="grid lg:grid-cols-2 gap-24 items-center">
                  <div>
                     <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                        We are changing the way people shop
                     </h1>
                     <p className="mt-8 max-w-xl text-lg leading-8">
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Tempore repellat explicabo
                        enim soluta temporibus asperiores aut
                        obcaecati perferendis porro nobis.
                     </p>
                     <Link className="btn btn-primary mt-10">
                        OUR PRODUCTS
                     </Link>
                  </div>
                  <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
                     {[Hero1, Hero2, Hero3, Hero4].map(
                        (img, index) => (
                           <div className="carousel-item" key={index}>
                              <img
                                 className="rounded-box h-full w-80 object-cover"
                                 src={img}
                                 alt="Hero Image"
                              />
                           </div>
                        )
                     )}
                  </div>
               </Container>
            </section>
            <section className="py-24">
               <Container>
                  <div className="border-b border-base-300 pb-5">
                     <h2 className="text-3xl font-medium tracking-wider capitalize">
                        Featured products
                     </h2>
                  </div>
                  <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                     {featuredProducts &&
                        featuredProducts.map((data, index) => {
                           const { id } = data;
                           return (
                              <ProductCard
                                 product={data.attributes}
                                 id={id}
                              />
                           );
                        })}
                  </div>
               </Container>
            </section>
         </main>
      </>
   );
}
