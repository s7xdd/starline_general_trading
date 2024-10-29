import localFont from "next/font/local";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import NavbarComponent from "./components/Navbar";
import Topbar from "./components/Topbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Starline General Trading LLC - Your trading partner",
  description: "With over 30 years in importing and exporting field, Starline General Trading LLC has built a strong reputation for quality and reliability. We are there for all your needs.",
  keywords: "Import, Export, Trading, General",
  authors: { name: "Mohammed Shamil", url: "https://github.com/s7xdd" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          <main>
            <Topbar/>
            <NavbarComponent/>
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
