import { Cabin } from "next/font/google";
import "../globals.css"

const cabin = Cabin({ subsets: ["latin"] });

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cabin.className}>
      {children}
    </div>
  );
}
