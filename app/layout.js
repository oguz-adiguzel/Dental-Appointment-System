"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import StoreProvider from "./storeProvider";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <StoreProvider>
        <PrimeReactProvider>
          <body className={inter.className}>
            {((pathname !== "/admin") && (pathname !== '/login')) && <Header />}
            {children}
            {((pathname !== "/admin") && (pathname !== '/login')) && <Footer />}
          </body>
        </PrimeReactProvider>
      </StoreProvider>
    </html>
  );
}
