import Head from "next/head";
import {useState} from 'react';
import { Parallax } from "react-scroll-parallax";
import Image from 'next/image';
import triangleBg from '/public/images/triangle2.webp';
import portrait from '/public/images/Portrait-2.webp';


const Home = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section className="home">
      <Head>
        <title>Robin LEBON développeur web</title>
        <meta name="description" content="Portoflio de Robin LEBON développeur web frontend à la Réunion. Développeur web à la Réunion, développeur React JS, développeur web et web mobile" />

        <link rel="icon" href="/favicon.ico" />

        {/* FACEBOOK */}
        <meta property="og:title" content="Robin LEBON | Développeur" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dev.robin-lebon.com" />
        <meta
          name="image"
          property="og:image"
          content="https://www.dev.robin-lebon.com/_next/image?url=%2Fimages%2Fsite-dev.jpg&w=750&q=75"
          key="ogimage"
        />
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
        <meta
          name="twitter:image"
          content="https://www.dev.robin-lebon.com/_next/image?url=%2Fimages%2Fsite-dev.jpg&w=750&q=75"
        />
      </Head>

      
      <div className="background">
        <Image src={triangleBg} alt="image d'un triangle" layout="responsive" objectFit="cover" priority={true} />
      </div>

     

      <div className="main_text_container">
      <Parallax speed={-10}>

        <p>
          Je suis <span className="makeMeBiggerMfkr" 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          data-text="Robin LEBON"
          title="C'est ici pour faire apparaître ma tronche"
          >Robin LEBON</span>
        </p>
        <p className="main_text_container__myJob">développeur web Frontend,</p>
        <p>photographe, vidéaste.</p>
        </Parallax>
        <Parallax speed={5} > 
        <p className="otw --disengage">.#open_to_work.</p>
        </Parallax>
      </div>
      
      <div className="portrait_container">
        <img src="./images/Portrait-2.webp" alt="portrait_numero_1" className={`portrait ${isHovering ?"" : "--hidden" }`}/>
        <img src="./images/Portrait-2.webp" alt="portrait_numero_2" className={`portrait1 ${isHovering ?"" : "--hidden" }`}/>
        <img src="./images/Portrait-2.webp" alt="portrait_numero_3" className={`portrait2 ${isHovering ?"" : "--hidden" }`}/>
      </div>

      <div className="right_side_text">
        <h1>FRONTEND</h1>
        <h2>developer</h2>
      </div>

    </section>
  );
};

export default Home;
