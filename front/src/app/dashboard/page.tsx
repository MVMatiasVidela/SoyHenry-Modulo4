"use client";
import { userSession } from "@/types";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Dashboard = () => {
  const [userData, setUserData] = useState<userSession>();
  

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }
  }, []);


   const handleLogout = () => {
    localStorage.removeItem("userSession");
    // window.location.reload();
     Swal.fire({
       title: "¡Excelente!",
       text: "sesión cerrada correctamente.",
       icon: "success",
       confirmButtonText: "Aceptar",
       customClass: {
         confirmButton:
           "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
       },
     });
    
 };




  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-row items-center justify-between text-black p-4 border bg-white border-gray-200 gap-3 m-4 max-w-[500px] h-[400px] shadow-2xl">
        <div>
          <h1 className="text-2xl">BIENVENIDO/A {userData?.userData?.name} </h1>
          <p> Tu dirección: {userData?.userData?.address} </p>
          <p> Email: {userData?.userData?.email} </p>
          <p> Número de teléfono: {userData?.userData?.phone} </p>
          <div className="p-4">
            <Link href="/home">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Cerrar sesión
              </button>
            </Link>
          </div>
        </div>
        <div className="m-4">
          <img
            className="max-h-full max-w-full"
            src="/imagenes/usuario.png"
            alt="Imagen de usuario"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
