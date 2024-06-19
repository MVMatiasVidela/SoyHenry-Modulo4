"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { userSession } from "@/types";
import { usePathname } from "next/navigation";
import Searchbar from "@/components/secundarios/searchbar/searchbar";
import productsToPreLoad from "@/helpers/products";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState<userSession>();

  useEffect(() => {
    if(typeof window !== "undefined" && window.localStorage) {
      const userData = localStorage.getItem("userSession");
      setUserData(JSON.parse(userData!));
    }
  }, [pathname]);

  console.log(pathname)

  return (
    <nav>
      <div className="w-full flex flex-wrap items-center justify-between bg-gray-900 p-4">
        <div className="flex items-center w-full md:w-auto justify-between">
          <div className="ml-16 transform transition duration-300 hover:rotate-180">
            <Link href="/home ">
              <Image
                src="/imagenes/logo1.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </div>

          <div className="flex space-x-4 md:hidden ">
            <Link href="/cart">
              <img
                className="h-8 w-8 "
                src="https://cdn-icons-png.flaticon.com/128/3081/3081559.png"
                alt="Cart"
              />
            </Link>

            <div
              className="block md:hidden flex-col items-center justify-center w-8 h-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-0.5 bg-yellow-500 my-1"></div>
              <div className="w-6 h-0.5 bg-yellow-500 my-1"></div>
              <div className="w-6 h-0.5 bg-yellow-500 my-1"></div>
            </div>
          </div>
        </div>

        <Searchbar />

        <div className="hidden md:flex space-x-12 md:mt-0 justify-center items-center mr-12 ">
          {userData?.token ? (
            <div className="text-white flex flex-row">
              <Link href="/dashboard">
                <img
                  className="h-8 w-8 m-4 hover:scale-110"
                  src="https://cdn-icons-png.flaticon.com/128/5953/5953761.png"
                  alt="Usuario"
                />
              </Link>
              <p className="m-auto"> BIENVENIDO/A {userData?.userData.name}</p>
            </div>
          ) : (
            <div className="text-white mr-8 ">
              <Link href="/login">
                <p className="flex justify-center rounded-lg p-1 hover:bg-red-600">
                  Iniciar sesión
                </p>
              </Link>
              <p className="flex justify-center">o</p>
              <Link href="/register">
                <p className="flex justify-center rounded-lg p-1 hover:bg-red-600">
                  Registrarse
                </p>
              </Link>
            </div>
          )}
          <div className="mr-12">
            {" "}
            <Link href="/cart">
              <img
                className="h-12 w-12 hover:scale-110"
                src="https://cdn-icons-png.flaticon.com/128/3081/3081559.png"
                alt="Cart"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-yellow-400 p-3 text-center ">
        {/* Menú de categorías, siempre visible en escritorio y oculto en móviles */}
        <ul className="hidden md:flex flex-row  justify-evenly">
          <Link
            className=" flex flex-col text-lg justify-center items-center font-semibold transition-all  hover:scale-110"
            href="/"
          >
            <img
              className="rounded-full  max-h-16 max-w-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hN_iwheRgNMrlmF5U4rubBPDQzCZ4_sJ_g&s"
              alt=""
            />
            <li>Smartphones</li>
          </Link>
          <Link
            className=" flex flex-col text-lg justify-center items-center font-semibold transition-all  hover:scale-110"
            href="/"
          >
            <img
              className="rounded-full max-h-16 max-w-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6_dJI_GKTj-dIYOis8ALAJEvtaTIBwhoNCA&s"
              alt=""
            />
            <li>Laptops</li>
          </Link>
          <Link
            className=" flex flex-col text-lg justify-center items-center font-semibold transition-all  hover:scale-110"
            href="/"
          >
            <img
              className="rounded-full max-h-16 max-w-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxAY5HzVyW2bREJHWcmQH4d4-_T5K-peaoA&s"
              alt=""
            />
            <li>Tablets</li>
          </Link>
          <Link
            className=" flex flex-col text-lg justify-center items-center font-semibold transition-all  hover:scale-110"
            href="/smartphones"
          >
            <img
              className="rounded-full max-h-16 max-w-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYj12qsMtKLhzXgasj0Mm0WLvCbq2sfHqODQ&s"
              alt=""
            />
            <li>Auriculares</li>
          </Link>
          <Link
            className=" flex flex-col text-lg justify-center items-center font-semibold transition-all  hover:scale-110"
            href="/otros"
          >
            <img
              className="rounded-full max-h-16 max-w-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxIQfcuSuqd1We_Z4xMqa73rl5NzSFFiwaA&s"
              alt=""
            />
            <li>Monitores</li>
          </Link>
          <Link
            className=" flex flex-col text-lg justify-center items-center font-semibold transition-all  hover:scale-110"
            href="/otros"
          >
            <img
              className="rounded-full max-h-12 max-w-16"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yzRoZ-c1cABRsHlU1qwSfknihnvwQyWCBA&s"
              alt=""
            />
            <li>Accessorios</li>
          </Link>
        </ul>

        {/* Menú desplegable solo visible en móviles */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col  mt-4 md:hidden space-y-2`}
        >
          {userData?.token ? (
            <div className="text-white bg-gray-700 rounded-lg flex flex-row">
              <Link href="/dashboard">
                <img
                  className="h-8 w-8 m-4"
                  src="https://cdn-icons-png.flaticon.com/128/5953/5953761.png"
                  alt="Register"
                />
              </Link>
              <p className="m-4">BIENVENIDO/A {userData?.userData.name}</p>
            </div>
          ) : (
            <div className="text-white bg-gray-700 rounded-lg flex flex-row p-4 justify-around ">
              <Link href="/login">
                <p className="flex justify-center rounded-lg p-1 hover:bg-red-600">
                  Iniciar sesión
                </p>
              </Link>
              <p className="flex justify-center">o</p>
              <Link href="/register">
                <p className="flex justify-center rounded-lg p-1 hover:bg-red-600">
                  Registrarse
                </p>
              </Link>
            </div>
          )}
          <Link
            className="text-lg font-semibold hover:text-white transition-colors"
            href="/"
          >
            Smartphones
          </Link>
          <Link
            className="text-lg font-semibold hover:text-white transition-colors"
            href="/"
          >
            Laptops
          </Link>
          <Link
            className="text-lg font-semibold hover:text-white transition-colors"
            href="/"
          >
            Tablets
          </Link>
          <Link
            className="text-lg font-semibold hover:text-white transition-colors"
            href="/"
          >
            Auriculares
          </Link>
          <Link
            className="text-lg font-semibold hover:text-white transition-colors"
            href="/"
          >
            Monitores
          </Link>

          <Link
            className="text-lg font-semibold hover:text-white transition-colors"
            href="/"
          >
            Accessorios
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
