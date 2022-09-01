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
        <meta name="description" content="Portoflio de Robin LEBON développeur web frontend à la Réunion" />
        <meta name="google-site-verification" content="6rqSOqil-415UCDGd9l2hogkBbdxXA0z9apVsA3KgH0" />
        
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
