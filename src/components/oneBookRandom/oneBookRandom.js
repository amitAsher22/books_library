import React from "react";
import bookStyle from "../../styles/BookId.module.css";

export default function oneBookRandom({ newArrayRandom5Books }) {
  return (
    <div className={bookStyle.divRandomBooks}>
      {newArrayRandom5Books.map((randomBook) => {
        return (
          <div className={bookStyle.mainBookSpecific}>
            <div className={bookStyle.containerImages}>
              <img
                className={bookStyle.imgRandomSingleBook}
                src={randomBook.img}
                alt={randomBook.title}
              />
            </div>
            <span className={bookStyle.styleWriter}>{randomBook.writer}</span>
            <span className={bookStyle.nameOfTitleBook}>
              {randomBook.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
