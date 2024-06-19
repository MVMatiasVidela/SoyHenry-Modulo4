import Link from "next/link";
import Image from "@/components/secundarios/images/images";

export default function PageNotFound() {
  return (
    <>
      <main className="flex items-center justify-center h-screen bg-light">
        <div className="text-center ">
          <div className="transform transition duration-300 hover:rotate-180">
            <Link href="/">
              <Image />
            </Link>
          </div>
          <h1 className="text-6xl text-yellow-500 font-bold tracking-tight text-primary sm:text-8xl">
            404
          </h1>
          <p className="mt-4 text-white text-xl leading-relaxed text-gray">
            Lo sentimos, no se ha encontrado lo que buscabas.
          </p>
          <div className="p-3">
            <Link
              className="mt-8 rounded-md bg-secondary p-3 px-5 font-semibold text-black shadow-lg bg-yellow-500 hover:bg-blue-800 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-primary "
              href="/"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
