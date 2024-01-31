export default function Select({
   id,
   label,
   name,
   options,
   className,
}) {
   return (
      <div className="form-control">
         <label htmlFor={id} className="label">
            <span className="label-text capitalize">{label}</span>
         </label>
         <select
            name={name}
            id={id}
            className={`select select-bordered select-sm ${className}`}
         >
            {options}
         </select>
      </div>
   );
}
