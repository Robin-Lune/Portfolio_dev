import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Head from "next/head";



const Index = () => {

  return (

    
    <div className="index_container">

      <Home />
      <About/>
      <Contact/>

      <Head>
        <title>Robin LEBON développeur web</title>
        <meta name="description" content="Portoflio de Robin LEBON développeur web frontend à la Réunion. Développeur web à la Réunion, développeur React JS, développeur web et web mobile" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#111111" />
        <meta name="apple-mobile-web-app-status-bar" content="#111111" />
        <meta name="msapplication-navbutton-color" content="#111111" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        

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
    </div>
  );
};

export default Index;
