"use client";
import { IProduct, userSession } from "@/types";
import { getProductById } from "@/helpers/product-helper";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import"./styles.css"
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";

const DetailProduct = ({ params }: { params: { productId: string } }) => {
  const router = useRouter();
  const [product, setProduct] = useState<IProduct>();
  const [userData, setUserData] = useState<userSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }

    const fetchData = async () => {
      const product = await getProductById(params.productId);
      setProduct(product);
    };
    fetchData();
  }, []);

  const handleAddToCart = (e: any) => {
    if (!userData?.token) {
          Swal.fire({
            title: "¡Ups!",
            text: "Debes iniciar sesíon para agregar productos al carrito.",
            icon: "error",
            confirmButtonText: "Aceptar",
            customClass: {
              confirmButton:
                "hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded",
            },
          });
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((product: IProduct) => {
        if (product.id === Number(e?.target?.id)) return true;
        return false;
      });
      if (productExist) {
          Swal.fire({
            title: "¡Ups!",
            text: "El producto ya existe en tu carrito.",
            icon: "error",
            confirmButtonText: "Aceptar",
            customClass: {
              confirmButton:
                "hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded",
            },
          });
        // router.push("/cart");
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
            Swal.fire({
              title: "¡Excelente!",
              text: "El producto ha sido añadido al carrito.",
              icon: "success",
              confirmButtonText: "Aceptar",
              customClass: {
                confirmButton:
                  "hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded",
              },
            });
        router.push("/cart");
      }
    }
  };

  const handleAddToFavorites = (e: any) => {
    if (!userData?.token) {
        Swal.fire({
          title: "¡Ups!",
          text: "Debes iniciar sesíon para agregar productos a favoritos.",
          icon: "error",
          confirmButtonText: "Aceptar",
          customClass: {
            confirmButton:
              "hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded",
          },
        });
    } else {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const productExist = favorites.some((product: IProduct) => {
        if (product.id === Number(e?.target?.id)) return true;
        return false;
      });
      if (productExist) {
          Swal.fire({
            title: "¡Ups!",
            text: "El producto ya existe en favoritos.",
            icon: "error",
            confirmButtonText: "Aceptar",
            customClass: {
              confirmButton:
                "hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded",
              
            },
          });
      } else {
        favorites.push(product);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        Swal.fire({
          title: "¡Excelente!",
          text: "El producto ha sido añadido a favoritos.",
          icon: "success",
          confirmButtonText: "Aceptar",
          customClass: {
            confirmButton:
              "hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded",
          },
        });
        router.push("/dashboard/favorites");
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-center m-4 p-4">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white text-black border border-gray-300 gap-3 p-4 shadow-2xl max-w-[800px] w-full">
        <img
          className="w-full md:w-auto max-w-[250px] h-auto max-h-[250px] object-cover mx-auto md:mx-0"
          src={product?.image}
          alt="Imagen del producto"
        />
        <div className="w-full md:w-1/2 flex flex-col my-4 md:my-0 md:ml-4 p-2">
          <div className="flex ">
            <h2 className="text-2xl font-bold text-center md:text-left">
              {product?.name}
            </h2>
            <div className="ml-4">
              <button
                id={product?.id.toString()}
                onClick={handleAddToFavorites}
                className="relative w-10 h-10  transition transform duration-300 heart-shape"
              ></button>
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-700 text-center md:text-left">
            {product?.description}
          </p>
          <p className="text-2xl md:text-2xl font-semibold text-center md:text-left">
            €{product?.price}
          </p>
          <p className="text-sm md:text-base text-gray-700 text-center md:text-left">
            Stock: {product?.stock}
          </p>
          <p className="text-center text-red-600 md:text-left">
            Devoluciones gratis
          </p>
          <p className="text-center md:text-left">
            Compra ahora y obtén el 30% OFF
          </p>
          <div className="p-4 flex flex-col md:flex-row items-center md:items-start gap-2">
            <Link href="/home">
              <button className="rounded-xl w-full max-w-[150px] h-auto bg-red-600 hover:bg-red-800 text-white p-2">
                Volver atrás
              </button>
            </Link>
            <button
              id={product?.id.toString()}
              onClick={handleAddToCart}
              className="rounded-xl w-full max-w-[150px] h-auto bg-yellow-500 hover:bg-blue-800 text-black p-2"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
