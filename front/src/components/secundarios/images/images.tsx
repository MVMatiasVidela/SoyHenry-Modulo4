import React from "react";
import Image from "next/image";
const Images = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center ">
     
      <Image
        className="transform transition-transform duration-200 hover:scale-105"
        src="/imagenes/logoAzul.png"
        alt=""
        width={300}
        height={500}
      />
    </div>
  );
};

export default Images;
