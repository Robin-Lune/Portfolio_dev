import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/main.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Loader from "../components/loader";

function MyApp({ Component, pageProps }) {
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <ParallaxProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="UTF-8"></meta>
        </Head>

        {IsLoading ? <Loader /> : <Component {...pageProps} />}
        
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
