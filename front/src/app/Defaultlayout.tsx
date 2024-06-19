import { Cabin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/primarios/navbar/navbar";
import Footer from "@/components/primarios/footer/footer";
import InfoApp from "@/components/secundarios/Contact/contact";


const cabin = Cabin({ subsets: ["latin"] });

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cabin.className}
    >
      <Navbar />
      {children}
      <InfoApp />
      <Footer />
    </div>
  );
}
