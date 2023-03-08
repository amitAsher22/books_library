import React from "react";
import Link from "next/link";
import styles from ".././styles/Search.module.css";

export default function card({ book }) {
  return (
    <div key={book.id} className={styles.card}>
      <div className={styles.containerImgBook}>
        <img src={book.img} alt={book.title} className={styles.imgBook} />
      </div>
      <h1>{book.title}</h1>
      <div className={styles.show}>
        <Link href={`book/${book.title.replace(/\s/g, "-").toLowerCase()}`}>
          <button className={styles.button_link_book}>To The Book</button>
        </Link>
      </div>
    </div>
  );
}
