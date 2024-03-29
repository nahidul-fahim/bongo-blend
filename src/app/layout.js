import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";
import { Providers } from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen min-w-full flex justify-start items-start`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
      <Toaster />
    </html>
  );
}
