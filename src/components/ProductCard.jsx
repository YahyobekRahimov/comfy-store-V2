import { Link } from "react-router-dom";

export default function ProductCard({ product, id }) {
   return (
      <Link
         key={id}
         to={`/products/${id}`}
         className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
      >
         <figure className="px-4 pt-4">
            <img
               src={product.image}
               alt={product.title}
               className="rounded-xl h-64 md:h-48 w-full object-cover"
            />
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">
               {product.title}
            </h2>
            <span className="text-secondary">
               ${product.price / 100}
            </span>
         </div>
      </Link>
   );
}
