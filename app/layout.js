// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import { Suspense } from "react";
// import { Provider } from "react-redux";
import StoreProvider from "./storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dental - Online Diş Hekimi Randevu Sistemi",
  description: "Dental, diş hekimlerinden kolayca randevu almanızı sağlayan online diş sağlığı platformudur. Hekimlerin uygunluklarını anında görüntüleyin ve size en uygun zamanı seçin. Sağlıklı bir gülüş için randevunuzu hemen planlayın!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <PrimeReactProvider>
          {/* <Suspense fallback={<p>Loading feed...</p>}> */}
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
          {/* </Suspense> */}
        </PrimeReactProvider>
        </StoreProvider>
    </html>
  );
}
