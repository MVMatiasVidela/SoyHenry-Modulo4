"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface IProduct {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<IProduct[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    }
  }, []);

  const removeFromFavorites = (productId: number) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="flex flex-col items-center justify-center m-4 p-4 min-h-[500px]">
      <h1 className="text-3xl font-bold mb-4">Favoritos</h1>
      {favorites.length > 0 ? (
        favorites.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center justify-between text-black border bg-white border-gray-200 gap-3 p-4 shadow-2xl max-w-[800px] w-full m-4"
          >
            <img
              className="w-full md:w-auto max-w-[250px] h-auto max-h-[250px] object-cover mx-auto md:mx-0"
              src={product.image}
              alt="Imagen del producto"
            />
            <div className="w-full md:w-1/2 flex flex-col my-4 md:my-0 md:ml-4 p-2">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-sm md:text-base text-gray-700">
                {product.description}
              </p>
              <p className="text-2xl md:text-2xl font-semibold">
                €{product.price}
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Stock: {product.stock}
              </p>
              <p className="text-red-600">Devoluciones gratis</p>
              <p>Compra ahora y obtén el 30% OFF</p>
              <div className="flex justify-between items-center">
                <Link href={`/product/${product.id}`}>
                  <button className="rounded-xl w-full max-w-[150px] h-auto bg-blue-600 hover:bg-blue-800 text-white p-2 mt-4">
                    Ver producto
                  </button>
                </Link>
                <button
                  className="rounded-xl w-full max-w-[150px] h-auto bg-red-600 hover:bg-red-800 text-white p-2 mt-4"
                  onClick={() => removeFromFavorites(product.id)}
                >
                  Eliminar de favoritos
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-xl text-gray-700">
          No tienes productos en tus favoritos.
        </p>
      )}
    </div>
  );
};

export default FavoritesPage;
