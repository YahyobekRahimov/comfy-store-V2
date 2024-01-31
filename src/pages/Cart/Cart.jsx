import Container from "../../components/Container";
import Header from "../../components/Header/Header";
import CartProduct from "./CartProduct";

const data = [
   {
      id: 1,
      title: "Avant-Garde Lamp",
      company: "Modenza",
      color: ["green"],
      number: 1,
      price: 179.99,
      image: "https://picsum.photos/200/300?random=",
   },
   {
      id: 2,
      title: "Coffee Table",
      company: "Modenza",
      color: ["red"],
      number: 1,
      price: 179.99,
      image: "https://picsum.photos/200/300?random=",
   },
];

export default function Cart() {
   return (
      <>
         <Header />
         <main>
            <section>
               <Container className="py-20">
                  <div className="border-b border-base-300 pb-5">
                     <h2 className="text-3xl font-medium tracking-wider capitalize">
                        Shopping Cart
                     </h2>
                  </div>
                  <div className="mt-8 grid gap-8 lg:grid-cols-12">
                     <div className="lg:col-span-8">
                        {data.map((product, index) => (
                           <CartProduct
                              product={product}
                              key={index}
                           ></CartProduct>
                        ))}
                     </div>
                     <div className="lg:col-span-4 lg:pl-4">
                        <div className="card bg-base-200">
                           <div className="card-body">
                              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                                 <span>Subtotal</span>
                                 <span className="font-medium">
                                    $359.98
                                 </span>
                              </p>
                              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                                 <span>Shipping</span>
                                 <span className="font-medium">
                                    $5.00
                                 </span>
                              </p>
                              <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                                 <span>Tax</span>
                                 <span className="font-medium">
                                    $5.00
                                 </span>
                              </p>
                              <p className="flex justify-between text-sm mt-4 pb-2">
                                 <span>Order total</span>
                                 <span className="font-medium">
                                    $2342.23
                                 </span>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </Container>
            </section>
         </main>
      </>
   );
}
