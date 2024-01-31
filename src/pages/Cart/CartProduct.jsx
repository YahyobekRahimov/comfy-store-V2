import Select from "../../components/Select";

export default function CartProduct({ product }) {
   return (
      <article className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0">
         <img
            src={product.image + product.id}
            alt={product.title}
            className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
         />
         <div className="sm:ml-16 sm:w-48">
            <h3>{product.title}</h3>
            <h4>{product.company}</h4>
            <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
               Color:
               {product.color.map((color) => (
                  <span
                     className="badge badge-sm"
                     style={{ backgroundColor: color }}
                  ></span>
               ))}
            </p>
         </div>
         <div className="sm:ml-12">
            <Select
               id={product.id}
               name="amount"
               label="Amount"
               className="select-xs"
               options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                  (num) => (
                     <option value={num}>{num}</option>
                  )
               )}
            />
            <button className="btn btn-primary btn-xs w-max mt-10 text-sm">
               REMOVE
            </button>
         </div>
         <p className="font-medium sm:ml-auto">${product.price}</p>
      </article>
   );
}
