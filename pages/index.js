import Head from "next/head";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import Script from "next/script";

import Loader from "../components/loader";


const Home = () => {
  if (typeof window !== "undefined") {
  const loader = document.querySelector(".loader");
  }

  useEffect(() => {
    setTimeout(function () {
      loader.parentElement.removeChild(loader);
    }, 3500);
  }, []);

  return (
    <div className="Home">
      <Script
        onLoad={() => {
          const text = baffle(".typo-robin");

          text.set({
            speed: 120,
            characters: ">░/ >/<▓▒? █▒▓/█ ▒▒▓ ██▓/?▒ ▓▒>▒ ▓░> ▒▓▒░ ▓▒█▒?",
          });

          text.start();
          setTimeout(function () {
            text.reveal(3500);
          }, 3500);
        }}
        src="https://cdn.jsdelivr.net/npm/baffle@0.3.6/dist/baffle.min.js"
      />
      <Head>
        <title>Robin LEBON - Portfolio</title>
        <meta name="description" content="Site de Robin LEBON Développeur " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="canevas" id="canevas">
          <img src="./images/Portrait-2.png" alt="" id="portrait" />
        </div>
        <div className="text-bio">
          <h2 className="typo-robin">ROBIN LEBON</h2>
          <h3 className="typewriter-title">
            Je suis{" "}
            <Typewriter
              onInit={(typewriter) => {
                setTimeout(() => {
                  typewriter
                    .typeString("Développeur.")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Photographe.")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Vidéaste.")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Sympa ;)")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }, 5000);
              }}
              options={{
                loop: true,
              }}
            />
          </h3>
          <p id="reunion">Basé à la Réunion</p>
          <p id="work">#OPEN_TO_WORK</p>
        </div>
      </section>
      <Loader/>
    </div>
  );
};

export default Home;
