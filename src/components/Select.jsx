export default function Select({
   id,
   label,
   name,
   options,
   className,
   inputRef,
}) {
   return (
      <div className="form-control" key={id}>
         <label htmlFor={id} className="label">
            <span className="label-text capitalize">{label}</span>
         </label>
         <select
            name={name}
            id={id}
            className={`select select-bordered select-sm ${className}`}
            ref={inputRef}
         >
            {options}
         </select>
      </div>
   );
}
