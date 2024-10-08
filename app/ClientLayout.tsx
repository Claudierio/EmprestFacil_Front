//Gerencia a exibição da navbar e do footer, dependendo da rota atual.
"use client";

import Navbar from "./shared/components/navbar";
import Footer from "./shared/components/footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/register';

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}
