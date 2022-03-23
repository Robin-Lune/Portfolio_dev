import Layout from '../components/Layout';
import '../styles/main.scss';
import {useState} from 'react';

function MyApp({ Component, pageProps }) {
  const [baffle, setBaffle] = useState(null);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
