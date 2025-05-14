import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/app/landing/Navbar/Navbar"
import { Montserrat } from 'next/font/google'
import Footer from "@/app/landing/Footer/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // según lo que uses
  variable: '--font-montserrat',        // para usar como variable si deseas
})

export const metadata: Metadata = {
  title: "Medisben Peru Especialidades Medicas",
  description: "Comprometidos con tu bienestar, guiados por la ciencia y la vocación.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <NavBar />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
