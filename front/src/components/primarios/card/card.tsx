import React from "react";
import { IProduct } from "@/types";
import categoriesToPreload from "@/helpers/category";

const Card: React.FC<IProduct> = ({
  name,
  price,
  image,
  description,
  stock,
  categoryId,
}) => {
  return (
    
    <div className="flex flex-wrap justify-center gap-4 max-w-full ">
  <div className="flex bg-white flex-col items-center justify-between text-black p-4 border border-gray-300 gap-3 m-4 max-w-[300px] h-[500px] shadow-2xl transform transition-transform duration-200 hover:scale-105">
    <img
      className="w-full max-w-[150px] h-full max-h-[200px] object-cover"
      src={image}
      alt="Imagen del producto"
    />
    <h2 className="text-2xl font-bold">{name}</h2>
    <p className="text-sm text-gray-700">{description}</p>
    <p className="text-2xl font-semibold">€{price}</p>
    <p className="text-sm text-gray-700">
      Category:{categoriesToPreload[categoryId].name}
    </p>
    <p className="text-sm text-gray-700">Stock:{stock}</p>
  </div>
</div>

  );
   
};
export default Card;
