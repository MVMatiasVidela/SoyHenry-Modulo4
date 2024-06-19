import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-gray-900 flex justify-center p-4">
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 items-center">
          <Link
            className="text-white text-xl hover:text-yellow-500 hover:scale-110"
            href="/dashboard/favorites"
          >
            Favoritos
          </Link>
          <Link
            className="text-white text-xl hover:text-yellow-500 hover:scale-110"
            href="/dashboard/orders"
          >
            Ordenes
          </Link>
          <Link
            className="text-white text-xl hover:text-yellow-500 hover:scale-110"
            href="/cart"
          >
            Carrito
          </Link>
          <Link href="/">
          </Link>
        </div>
      </div>
      {children}
    </>
  );
}
