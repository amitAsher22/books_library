import React from "react";
import booksDetails from "../../data_books/books.json";
import bookStyle from "../../styles/BookId.module.css";
import NavBar from "@/components/navBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/fontawesome-free-solid";
import Footer from "@/components/footer/Footer";

export default function BookId({ book, newArrayRandom5Books }) {
  return (
    <>
      <NavBar />
      <div className={bookStyle.mainBook}>
        <span className={bookStyle.navigationPage}>Home / {book.title}</span>
        <div className={bookStyle.conteainerDiv}>
          <div className={bookStyle.divImgBook}>
            <img
              src={book.img}
              alt={book.title}
              className={bookStyle.imgBook}
            />
          </div>
          <div className={bookStyle.divSecondDescrption}>
            <span className={bookStyle.titleBookR}>{book.title}</span>
            <p className={bookStyle.writerBook}> By {book.writer}</p>
            <p className={bookStyle.summaryBook}>{book.summary}</p>
            <div className={bookStyle.divButtons}>
              <button className={bookStyle.buttonWishListBook}>
                Add to cart
              </button>
              <button className={bookStyle.likebtn}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={bookStyle.randomBooks}>
        <p className={bookStyle.titleRandomBooks}>
          You may be interesting with
        </p>

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
                <span className={bookStyle.styleWriter}>
                  {randomBook.writer}
                </span>
                <span className={bookStyle.nameOfTitleBook}>
                  {randomBook.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  if (!context.query.bookId) {
    return {
      notFound: true,
    };
  }
  const boodId = context.query.bookId;
  const book = booksDetails.find(
    (item) => item.title.split(" ").join("-").toLowerCase() === boodId
  );

  if (!book) {
    return {
      notFound: true,
    };
  }
  let newArrayRandom5Books = [];
  let CheackRandomId = {};
  while (newArrayRandom5Books.length < 5) {
    const randomNumber = Math.floor(Math.random() * booksDetails.length);
    const objRandomBook = booksDetails[randomNumber];
    const id = objRandomBook.id;

    if (CheackRandomId[id]) continue;

    CheackRandomId[id] = true;
    newArrayRandom5Books.push(objRandomBook);
  }

  return {
    props: {
      book,
      newArrayRandom5Books,
    },
  };
}
