"use client";
import { validateLoginForm } from "@/helpers/formValidation";
import { LoginErrorProps, LoginProps } from "@/types";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { login } from "@/helpers/auth.helper";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Login = () => {
  const router = useRouter()
  const [dataUser, setDataUser] = useState<LoginProps>({
    email: "",
    password: "",
  });

  const [errorUser, setErrorUser] = useState<LoginErrorProps>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await login(dataUser);
      const { token, user } = response;

      localStorage.setItem(
        "userSession",
        JSON.stringify({ token: token, userData: user })
      );
        Swal.fire({
          title: "¡Excelente!",
          text: "Se ha iniciado sesión correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
          customClass: {
            confirmButton:
              "hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded",
          },
        });
      router.push("/home");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  
  
  
  
  useEffect(() => {
    const errors = validateLoginForm(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  return (
    <div className="max-w-md mx-auto my-10 p-6 border bg-white border-gray-300 shadow-2xl">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Iniciar sesión
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email-address"
            className="block text-black font-medium mb-2"
          >
            Email
          </label>
          <input
            id="email-address"
            name="email"
            type="text"
            value={dataUser.email}
            required
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full p-2 border border-gray-400 rounded"
          />
          {errorUser.email && (
            <p className="text-red-600 text-sm">{errorUser.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-black font-medium mb-2"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={dataUser.password}
            required
            onChange={handleChange}
            placeholder="**********"
            className="w-full p-2 border border-gray-400 rounded"
          />
          {errorUser.password && (
            <p className="text-red-600 text-sm">{errorUser.password}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-900 transition duration-300"
          >
            Enviar
          </button>
        </div>
        <div className="flex flex-col justify-center items-center mt-4">
          <p>¿No estas registrado?</p>
          <Link
            className="text-red-600 hover:scale-110"
            href="/register"
          >
            Registrarse
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
