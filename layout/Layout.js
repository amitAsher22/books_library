import Footer from "./footer/Footer";
import React from "react";
import NavBar from "./navbar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
