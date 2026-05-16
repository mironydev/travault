import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Travault",
  description: "Homepage of Travault website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={inter.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
