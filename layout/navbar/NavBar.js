import styleNav from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className={styleNav.container}>
        <div className={styleNav.middle}>
          <div className={styleNav.left}>
            <Link href="/">
              <div className={styleNav.divImgBook}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
                  alt="imgbook"
                  className={styleNav.IconNavbar}
                />
              </div>
            </Link>
            <Link href="/">
              <span className={styleNav.category}>Home</span>
            </Link>
            <Link href={"/booksLibrary/myBooks"}>
              <span className={styleNav.category}>My books</span>
            </Link>
          </div>
          <Link href={"/booksLibrary/search"}>
            <div className={styleNav.right}>
              <span className={styleNav.category}>Search</span>
            </div>
          </Link>
        </div>

        <GiHamburgerMenu className={styleNav.hamburger} />
      </div>
    </>
  );
};

export default NavBar;
