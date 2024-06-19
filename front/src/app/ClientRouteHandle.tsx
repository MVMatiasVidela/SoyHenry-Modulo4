"use client";

import { usePathname } from "next/navigation";
import DefaultLayout from "./Defaultlayout";
import LandingLayout from "@/app/landing/LandingLayout";
import '@/app/globals.css'

export default function ClientRouteHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return isLandingPage ? (
    <LandingLayout>{children}</LandingLayout>
  ) : (
    <DefaultLayout>{children}</DefaultLayout>
  );
}
