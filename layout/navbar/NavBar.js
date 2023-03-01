import styleNav from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <>
      <div className={styleNav.container}>
        <div className={styleNav.middle}>
          <div className={styleNav.left}>
            <div className={styleNav.divImgBook}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
                alt="imgbook"
                className={styleNav.IconNavbar}
              />
            </div>
            <span className={styleNav.category}>Home</span>
            <span className={styleNav.category}>My books</span>
          </div>
          <div className={styleNav.right}>
            <span className={styleNav.category}>Search</span>
          </div>
        </div>
        <GiHamburgerMenu className={styleNav.hamburger} />
      </div>
    </>
  );
};

export default NavBar;
