import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/main.scss";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
