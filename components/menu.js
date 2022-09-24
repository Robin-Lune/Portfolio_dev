import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import SwitchBtn from "../components/switch";
import Image from "next/image";

import carreBg from "../public/images/carre2.webp";
import twitter from "../public/images/Web/twitter.webp";
import instagram from "../public/images/Web/instagram.webp";
import github from "../public/images/Web/github.webp";
import facebook from "../public/images/Web/facebook.webp";

const Menu = () => {
  const router = useRouter();
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [rotation, setRotation] = useState(180);

  const toggleBurger = () => {
    setBurgerStatus(!burgerStatus);
    console.log(burgerStatus);
  };

  const quitDelay = () => {
    setTimeout(toggleBurger, 1000);
  };

  if (typeof window !== "undefined") {
    // BURGER MENU ANIMATION
    const burgerTop = document.getElementById("burger-top");
    const burgerBottom = document.getElementById("burger-bottom");
    const carre = document.getElementById("menu_bg");

    const rotateImg = () => {
      setRotation(rotation + 360);

      if (rotation === 360) {
        // 360 means rotate back to 0
        setRotation(360);
      }
      console.log(rotation);
      carre.style.transform = `  translateX(-50%) rotate(${rotation}deg) `;
    };

    const transition = () => {
      if (burgerStatus) {
        burgerTop.style.transform = "rotate(45deg) translateX(0) translateY(0)";
        burgerBottom.style.transform =
          "rotate(45deg) translateX(0)translateY(0)";
      } else {
        burgerTop.style.transform =
          "rotate(135deg) translateX(4px) translateY(-4px)";
        burgerBottom.style.transform =
          "rotate(135deg) translateX(4.5px)translateY(4.5px)";
      }
    };
  }

  return (
    <aside className={`menu ${burgerStatus ? "bg-active" : ""}`}>
      <div className={`menu_bg ${burgerStatus ? "" : "--hidden"}`} id="menu_bg">
        <Image
          src={carreBg}
          alt="carre"
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div
        className="menu__burger_container"
        onClick={function (event) {
          toggleBurger();
          transition();
        }}
      >
        <span className="burger_container__line " id="burger-top"></span>
        <span className="burger_container__line " id="burger-middle"></span>
        <span className="burger_container__line " id="burger-bottom"></span>
      </div>
      <p
        className="menu_text"
        onClick={function (event) {
          toggleBurger();
          transition();
        }}
      >
        MENU
      </p>

      <nav className={`menu__navigation ${burgerStatus ? "" : "--hidden"}`}>
        <ul className="menu__navigation__list">
          <li className="menu__navigation__list__cells">
            <Link href={"/"}>
              <a
                href=""
                className={`navlink  ${router.pathname == "/" ? "active" : ""}`}
                data-text="ACCUEIL"
                onClick={function (event) {
                  quitDelay();
                  rotateImg();
                  transition();
                }}
              >
                ACCUEIL
              </a>
            </Link>
          </li>
          <li className="menu__navigation__list__cells">
            <Link href={"/about"}>
              <a
                href=""
                className={`navlink  ${
                  router.pathname == "/about" ? "active" : ""
                }`}
                data-text="À PROPOS"
                onClick={function (event) {
                  quitDelay();
                  rotateImg();
                  transition();
                }}
              >
                À PROPOS
              </a>
            </Link>
          </li>
          <li className="menu__navigation__list__cells">
            <Link href={"/projects"}>
              <a
                href=""
                className={`navlink  ${
                  router.pathname == "/projects" ? "active" : ""
                }`}
                data-text="PROJETS"
                onClick={function (event) {
                  quitDelay();
                  rotateImg();
                  transition();
                }}
              >
                PROJETS
              </a>
            </Link>
          </li>
          <li className="menu__navigation__list__cells">
            <Link href={"/experience"}>
              <a
                href=""
                className={`navlink  ${
                  router.pathname == "/experience" ? "active" : ""
                }`}
                data-text="EXP."
                onClick={function (event) {
                  quitDelay();
                  rotateImg();
                  transition();
                }}
              >
                EXP.
              </a>
            </Link>
          </li>
          <li className="menu__navigation__list__cells">
            <Link href={"/contact"}>
              <a
                href=""
                className={`navlink  ${
                  router.pathname == "/contact" ? "active" : ""
                }`}
                data-text="CONTACT"
                onClick={function (event) {
                  quitDelay();
                  rotateImg();
                  transition();
                }}
              >
                CONTACT
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <a
        href="mailto:robinlebon974@gmail.com"
        className={`email  ${burgerStatus ? "" : "--hidden"}`}
        data-text="robinlebon974@gmail.com"
      >
        robinlebon974@gmail.com
      </a>

      <div className="menu__social_container">
        <a
          href="https://twitter.com/Robin_Lune"
          target="_blank"
          rel="noreferrer"
          className={`social_container__link  ${
            burgerStatus ? "active_social" : ""
          }`}
        >
          <p className={`social_text  ${burgerStatus ? "" : "--hidden"}`}>
            @ROBIN_LUNE
          </p>

          <div className={`social_icon ${burgerStatus ? "" : "--disable"}`}>
            <Image
              src={twitter}
              alt="twitter"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </a>
        <a
          href="https://www.instagram.com/robin_lune/"
          target="_blank"
          rel="noreferrer"
          className={`social_container__link  ${
            burgerStatus ? "active_social" : ""
          }`}
        >
          <p className={`social_text  ${burgerStatus ? "" : "--hidden"}`}>
            @ROBIN_LUNE
          </p>

          <div className={`social_icon ${burgerStatus ? "" : "--disable"}`}>
            <Image
              src={instagram}
              alt="instagram"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </a>
        <a
          href="https://github.com/Robin-Lune"
          target="_blank"
          rel="noreferrer"
          className={`social_container__link  ${
            burgerStatus ? "active_social" : ""
          }`}
        >
          <p className={`social_text  ${burgerStatus ? "" : "--hidden"}`}>
            @ROBIN_LUNE
          </p>

          <div className={`social_icon ${burgerStatus ? "" : "--disable"}`}>
            <Image src={github} alt="github" layout="fill" objectFit="cover" />
          </div>
        </a>
        <a
          href="https://www.facebook.com/robinlune"
          target="_blank"
          rel="noreferrer"
          className={`social_container__link  ${
            burgerStatus ? "active_social" : ""
          }`}
        >
          <p className={`social_text  ${burgerStatus ? "" : "--hidden"}`}>
            @ROBIN_LUNE
          </p>

          <div className={`social_icon ${burgerStatus ? "" : "--disable"}`}>
            <Image
              src={facebook}
              alt="facebook"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </a>
        <SwitchBtn />
      </div>
    </aside>
  );
};

export default Menu;
