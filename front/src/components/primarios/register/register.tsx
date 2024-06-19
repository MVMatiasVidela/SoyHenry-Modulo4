"use client";
import { validateRegisterForm } from "@/helpers/formValidation";
import { RegisterErrorProps, RegisterProps } from "@/types";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register } from "@/helpers/auth.helper";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const Register = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<RegisterProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });

  const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
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
      await register(dataUser);

        Swal.fire({
          title: "¡Registro exitoso!",
          text: "Ya puedes iniciar sesión.",
          icon: "success",
          confirmButtonText: "Aceptar",
          customClass: {
            confirmButton:
              "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
          },
        });
      router.push("/login");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const errors = validateRegisterForm(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  return (
    
    <div className="max-w-md mx-auto my-10 p-6 border bg-white border-gray-200 shadow-2xl">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Resgistrarse
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

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-black font-medium mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={dataUser.name}
            required
            onChange={handleChange}
            placeholder="Matias Videla"
            className="w-full p-2 border border-gray-400 rounded"
          />
          {errorUser.name && (
            <p className="text-red-600 text-sm">{errorUser.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-black font-medium mb-2"
          >
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={dataUser.address}
            required
            onChange={handleChange}
            placeholder="Azopardo 50, Mendoza"
            className="w-full p-2 border border-gray-400 rounded"
          />
          {errorUser.address && (
            <p className="text-red-600 text-sm">{errorUser.address}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-black font-medium mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={dataUser.phone}
            required
            onChange={handleChange}
            placeholder="123-456-7890"
            className="w-full p-2 border border-gray-400 rounded"
          />
          {errorUser.phone && (
            <p className="text-red-600 text-sm">{errorUser.phone}</p>
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
          <p>¿Ya tienes cuenta?</p>
          <Link className="text-red-600 hover:scale-110" href="/login">
            Iniciar seción
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
