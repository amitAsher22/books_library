import React from "react";
import NavBar from "layout/navbar/NavBar";
import Head from "next/head";

export default function myBooks() {
  return (
    <div>
      <Head>
        <title>books library | my books</title>
      </Head>
      <NavBar />
      <p>my books</p>
    </div>
  );
}
