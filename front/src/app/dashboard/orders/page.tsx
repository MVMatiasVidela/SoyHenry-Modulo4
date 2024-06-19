"use client";
import { getOrders } from "@/helpers/orders.helpers";
import { IOrder, userSession } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OrdersPage = () => {
  const [userData, setUserData] = useState<userSession>();
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const ordersResponse = await getOrders(userData?.token!);
      setOrders(ordersResponse);
    };
    userData?.token && fetchData();
  }, [userData?.token]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center text-black border p-4 w-full min-h-[500px]">
      <h1 className="text-xl">Ordenes:</h1>
      {orders?.length > 0 ? (
        orders?.map((orden) => {
          return (
            <div
              className="flex flex-col items-center justify-center border bg-white border-gray-200 p-4 shadow-lg"
              key={orden.id}
            >
              <p>{new Date(orden.date).toLocaleDateString()}</p>
              <p>Status: {orden.status}</p>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-center border border-gray-200 p-4 shadow-lg">
          <p className="text-red-600 text-2xl">Aun no hay ordenes realizadas</p>
          <Link href="/">
            <button className="rounded-xl w-full max-w-[200px] h-auto bg-yellow-500 hover:bg-blue-800 text-black p-2 mt-2">
              Comprar ahora
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default OrdersPage
