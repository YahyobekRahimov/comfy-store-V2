export default function Container({ children, className }) {
   return (
      <div
         className={`mx-auto max-w-[72rem] w-full px-[2rem] ${className}`}
      >
         {children}
      </div>
   );
}
