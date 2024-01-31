export default function Container({ children, className }) {
   return (
      <div
         className={`mx-auto max-w-[1440px] w-full px-[2rem] ${className}`}
      >
         {children}
      </div>
   );
}
