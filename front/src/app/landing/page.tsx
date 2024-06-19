import React from "react";
import Link from "next/link";


const LandingPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 h-screen justify-center">
      <div className="absolute mt-24 hover:scale-110">
        <Link className="" href="/home">
          <h1 className="text-xl text-white bg-blue-900 p-3 mt-[200px] border rounded-xl">
            VISITAR LA PÁGINA
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="/imagenes/landing.png"
          alt="Landing Image"
          className=" h-[600px] w-[1100px]"
        />
      </div>
    </div>
  );
};

export default LandingPage;
