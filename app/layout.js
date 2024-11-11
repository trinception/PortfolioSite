import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "trinception.dev",
  description: "Portfolio website for AI/ML researcher and software engineer Trinity Evans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
