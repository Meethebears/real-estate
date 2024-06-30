import React from "react";
import { Inter } from "next/font/google";
import Navbar from "./Component/Navbar";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real Estate",
  description: ":ซื้อ-ขายบ้านและที่ดิน",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-col">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
