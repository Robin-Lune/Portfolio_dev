import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/main.scss';




function MyApp({ Component, pageProps }) {
  
  return (

    
    <Layout>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
