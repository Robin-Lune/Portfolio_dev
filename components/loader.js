import React from "react";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";

const loader = () => {
  if (typeof window !== "undefined") {
    const text2 = document.querySelector(".text2");
    const text3 = document.querySelector(".text3");
    const content = document.querySelectorAll(".content");
    const audio = new Audio();
    audio.src = "./boot-sequence.mp3";

    console.log(content);

      let PLay = audio.play();
      PLay.then(() => {
        // Autoplay started!
      }).catch((error) => {
        // Autoplay was prevented.
        console.log(error);
      });
  }

  useEffect(() => {
    content[0].classList.add("content-loader");
    setTimeout(function () {
      content[0].classList.remove("content-loader");
      text2.style.opacity = "1";
      content[1].classList.add("content-loader");
    }, 1500);

    setTimeout(function () {
      content[1].classList.remove("content-loader");
      text3.style.opacity = "1";
      content[2].classList.add("content-loader");
    }, 2500);
  }, []);

  return (
    <div className="loader crt">
      <div className="box-loader">
        <p className="text1">
          {">"} IPv4 supported
          <br />
          {">"} IPv6 supported <br />
          {">"} Verifying Network Data ...
          <br />
          {">"} All Checked <br />
          {">"} Initializing system <span className="content">|</span>
        </p>
        <p className="text2">
          {">"} Starting Server <span className="content">|</span>
        </p>
        <p className="text3">
          {">"} root@remoteHost:~# <span className="content">|</span>
        </p>
      </div>
    </div>
  );
};

export default loader;
