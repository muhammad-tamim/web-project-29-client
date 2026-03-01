import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarong | Ethically made handcrafted products | A BRAC social enterprise",
  description: "Aarong - Number one lifestyle retailer in Bangladesh and social enterprise of BRAC.",
  icons: 'logo2.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
