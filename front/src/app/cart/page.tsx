"use client";
import { IProduct, userSession } from "@/types";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { createOrder } from "@/helpers/orders.helpers";
import Link from "next/link";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Cart = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [userData, setUserData] = useState<userSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData: userSession = JSON.parse(
        localStorage.getItem("userSession")!
      );
      setUserData(userData);
      if (!userData?.token) redirect("/login");
    }

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      let totalcart = 0;
      storedCart.map((item: IProduct) => {
        totalcart += item.price;
      });
      setTotal(totalcart);
      setCart(storedCart);
    }
  }, []);

  const handleClick = async () => {
    const idProducts = new Set(cart.map((product) => product.id));
    await createOrder(Array.from(idProducts), userData?.token!);

    Swal.fire({
      title: "¡Compra realizada con éxito!",
      text: "Tu pedido ha sido procesado correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
      customClass: {
        confirmButton:
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
      },
    });

    setCart([]);
    setTotal(0);
    localStorage.setItem("cart", "[]");
  };

  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const updatedTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(updatedTotal);
  };

  return (
    <div className="flex flex-wrap justify-center m-4 p-4 h-full">
      <div className="flex flex-col md:flex-row w-full max-w-[1200px] gap-4 ">
        {/* Columna de productos */}
        <div className="flex flex-col items-center justify-center text-black gap-3 p-4  w-full md:w-1/2">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-around text-black border bg-white rounded-xl border-gray-300 gap-3 p-4 shadow-2xl w-full"
              >
                <div className="flex-shrink-0 w-full md:w-[250px] h-[250px] flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-full md:w-auto">
                  <p className="text-2xl font-bold">{item.name}</p>
                  <p className="text-xl">Precio: €{item.price}</p>
                  <div>
                    <button
                      className="rounded-xl w-full max-w-[150px] h-auto bg-red-600 hover:bg-red-800 text-white p-2 mt-2"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="min-h-[300px] items-center">
              <p className="text-yellow-500 text-2xl items-center justify-center">
                No tienes productos en tu carrito todavía.
              </p>
              <Link href="/home">
                <button className="rounded-xl w-full max-w-[200px] h-auto  bg-red-600 hover:bg-red-800 text-white p-2 mt-2">
                  Agregar articulos
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Columna de detalles */}
        <div className="flex flex-col items-center bg-white text-black gap-3 p-4 border border-gray-200 shadow-2xl w-full md:w-1/2">
          <div className="w-full text-center mb-4">
            <p className="text-2xl font-bold">Detalles del pedido</p>
          </div>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="w-full items-center text-center mb-4"
              >
                <p className="text-2xl font-bold">{item.name}</p>
                <p className="text-xl">Precio: €{item.price}</p>
              </div>
            ))
          ) : (
            <div>
              <p className="text-red-600 text-2xl">
                No tienes productos en tu carrito todavía.
              </p>
            </div>
          )}
          {cart.length > 0 && (
            <div className="flex flex-col items-center w-full text-center mt-4">
              <p className="text-2xl font-bold">Total: €{total}</p>
              <Link href="/home">
                <button className="rounded-xl w-full max-w-[200px] h-auto  bg-red-600 hover:bg-red-800 text-white p-2 mt-2">
                  Agregar más articulos
                </button>
              </Link>

              <button
                className="rounded-xl w-full max-w-[200px] h-auto bg-yellow-500 hover:bg-blue-900 text-black p-2 mt-2"
                onClick={handleClick}
              >
                Realizar compra
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
