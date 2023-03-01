import styles from ".././styles/ShowBooks.module.css";
import Link from "next/link";
import dataFromJson from ".././data_books/books.json";
import { useState } from "react";

const ShowBooks = () => {
  const [valueInput, setValueInput] = useState("");
  const [listbooksData, setlisrbooksData] = useState(dataFromJson);

  function handleChange(e) {
    const valueFromInput = e.target.value;
    setValueInput(valueFromInput);

    if (valueInput === "") {
      setlisrbooksData(listbooksData);
    } else {
      let filterBooks = listbooksData.filter(
        (bookFilter) =>
          bookFilter.title.toLowerCase().includes(valueInput.toLowerCase()) ||
          bookFilter.writer.toLowerCase().includes(valueInput.toLowerCase())
      );

      setlisrbooksData(filterBooks);
    }
  }

  return (
    <>
      <div className={styles.divSearch}></div>

      <div className={styles.container}>
        {listbooksData.map((book) => {
          return (
            <div key={book.id} className={styles.card}>
              <div className={styles.containerImgBook}>
                <img
                  src={book.img}
                  alt={book.title}
                  className={styles.imgBook}
                />
              </div>
              <h1>{book.title}</h1>
              <div className={styles.show}>
                <Link
                  href={`/book/${book.title.replace(/\s/g, "-").toLowerCase()}`}
                >
                  <button className={styles.button_link_book}>
                    To The Book
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowBooks;
