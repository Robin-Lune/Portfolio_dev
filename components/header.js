import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [burgerStatus, setBurgerStatus] = useState(false);

  const toggleBurger = () => {
    setBurgerStatus(!burgerStatus);
    // console.log(burgerStatus);
  };
  if (typeof window !== "undefined") {
    // BURGER MENU ANIMATION
    const burgerMiddle = document.getElementById("burger-middle");
    const burgerTop = document.getElementById("burger-top");
    const burgerBottom = document.getElementById("burger-bottom");

    const transition = () => {
      if (burgerStatus) {
        burgerTop.style.transform = "rotate(0deg) translateX(0) translateY(0)";
        burgerMiddle.style.opacity = "1";
        burgerBottom.style.transform =
          "rotate(0deg) translateX(0)translateY(0)";
      } else {
        burgerTop.style.transform =
          "rotate(-225deg) translateX(5px) translateY(-4px)";
        burgerMiddle.style.opacity = "0";
        burgerBottom.style.transform =
          "rotate(225deg) translateX(4.5px)translateY(4.5px)";
      }
    };
  }

  return (
    <div className="wrapper">
      <header>
        <Link href="/">
          <a className="navigation-link" >
            <h1 className="logo" id="logo">
              R0B1
            </h1>
          </a>
        </Link>
        <nav className={`nav-right ${burgerStatus ? "" : "menu-false"}`}>
          <ul>
            <li>
              <Link href="/projects" >
                <a className={`navigation-link ${router.pathname == "/projects" ? "active" : ""}`} onClick={function (event) {
              toggleBurger();
              transition();
            }}>Projets</a>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <a className={`navigation-link ${router.pathname == "/experience" ? "active" : ""}`} onClick={function (event) {
              toggleBurger();
              transition();
            }} >Exp.</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={`navigation-link ${router.pathname == "/about" ? "active" : ""}`} onClick={function (event) {
              toggleBurger();
              transition();
            }}>À propos</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={`navigation-link ${router.pathname == "/contact" ? "active" : ""}`} onClick={function (event) {
              toggleBurger();
              transition();
            }}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`burger-menu ${burgerStatus ? "bg-active" : ""}`} onClick={function (event) {
              toggleBurger();
              transition();
            }}>
          <div
            className="burgerContainer"
            
          >
            <div className="burger-top" id="burger-top"></div>
            <div className="burger-middle" id="burger-middle"></div>
            <div className="burger-bottom" id="burger-bottom"></div>
          </div>
          <p>Files</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
