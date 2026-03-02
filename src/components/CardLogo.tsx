// import React from "react";
interface logoProps {
  src: string;
}
function CardLogo({ src }: logoProps) {
  return (
    <div className="border-[#92487A] border-3">
      <img src={src} alt="logo" className="w-10 h-10" />
    </div>
  );
}

export default CardLogo;
