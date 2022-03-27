import Head from "next/head";
import Typewriter from "typewriter-effect";
import Script from "next/script";
import Image from "next/image";

import profilePic from "../public/images/Portrait-2.png";

const Home = () => {
  return (
    <div className="home">
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
        <meta name="description" content="Site de Robin LEBON Développeur" />
        <link rel="icon" href="/favicon.ico" />

         {/* FACEBOOK */}
         <meta property="og:title" content="Robin LEBON | Développeur" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dev.robin-lebon.com" />
        <meta property="og:image" content="https://www.dev.robin-lebon.com/_next/image?url=%2Fimages%2Fsite-dev.jpg&w=750&q=75" key="ogimage"/>
        <meta
          property="og:description"
          content="Portfolio de Robin LEBON Développeur"
        />
        {/* TWITTER */}
        <meta name="twitter:title" content="Site de Robin LEBON Développeur " />
        <meta
          name="twitter:description"
          content="Portfolio de Robin LEBON Développeur"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@publisher_handle" />
        <meta name="twitter:creator" content="@author_handle" />
        <meta name="twitter:image" content="https://www.dev.robin-lebon.com/_next/image?url=%2Fimages%2Fsite-dev.jpg&w=750&q=75" />
      </Head>

      <section>
        <div className="canevas" id="canevas">
          <Image
            src={profilePic}
            id="portrait"
            width={500}
            height={750}
            alt="Portrait de Robin LEBON"
          />

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
                    .typeString("Plutôt Sy")
                    .deleteAll()
                    .typeString("Sympa ;)")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }, 1000);
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
    </div>
  );
};

export default Home;
