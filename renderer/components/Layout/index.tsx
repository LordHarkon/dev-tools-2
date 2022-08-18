import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      {/* <title>{title}</title> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="h-screen border border-gray-600">
      <Header />
      <main className="h-[calc(100vh-50px)] mt-12 overflow-auto invisible-scrollbar">{children}</main>
      <footer className="hidden"></footer>
    </div>
  </div>
);

export default Layout;
