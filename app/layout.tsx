import "./globals.css";

import { Montserrat } from "next/font/google";

import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import ActiveStatus from "./components/ActiveStatus";

const mont = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Messenger Clone",
  description:
    "A Full Stack Facebook Messenger clone, built with Next.js, React, Tailwind, NextAuth, Pusher, and Cloudinary. It mimics Messenger's UI/UX and features robust backend functionalities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../images/favicon-16x16.png"
        />
      </head>
      <body className={mont.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
