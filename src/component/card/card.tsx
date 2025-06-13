import type { ReactElement } from "react";

interface Icon {
  icon: ReactElement;
}

export default function Card(props: Icon) {
  return (
  
    <div className="translate-x-22 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex items-center justify-center rounded-2xl bg-[#313131] hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.15)] duration-300 ease-in-out 
    hover:scale-106">
      {props.icon}


</div>  );
}
