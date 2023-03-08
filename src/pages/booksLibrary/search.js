import styles from "../../styles/Search.module.css";

import dataFromJson from "../../data_books/books.json";
import { useState } from "react";
import Card from "@/components/card";
import Head from "next/head";
import NavBar from "layout/navbar/NavBar";

const search = () => {
  const [listbooksData, setlisrbooksData] = useState(dataFromJson);
  const [valueOfInput, setvalueOfInput] = useState("");

  function handleChange(e) {
    const valueFromInput = e.target.value;

    setvalueOfInput(valueFromInput);

    if (valueOfInput === "") {
      setlisrbooksData(listbooksData);
    } else {
      let filterBooks = dataFromJson.filter(
        (bookFilter) =>
          bookFilter.title
            .toLowerCase()
            .includes(valueFromInput.toLowerCase()) ||
          bookFilter.writer.toLowerCase().includes(valueFromInput.toLowerCase())
      );

      setlisrbooksData(filterBooks);
    }
  }

  return (
    <>
      <NavBar />
      <Head>
        <title>books library | search</title>
      </Head>
      <div className={styles.divSearch}>
        <input
          placeholder="Search"
          onChange={handleChange}
          className={styles.inputValue}
          value={valueOfInput}
        />
      </div>

      <div className={styles.container}>
        {listbooksData.map((book) => {
          return <Card book={book} />;
        })}
      </div>
    </>
  );
};

export default search;
