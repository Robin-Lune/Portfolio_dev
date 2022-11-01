import React from 'react';
import Head from "next/head";
import Image from 'next/image';

import nedry from "../public/images/dennis-nedry.gif";



const Custom404 = () => {
    return (
        <section className='container_404'>
            <Head>
        <title>Robin LEBON - À propos</title>
        <meta
          name="description"
          content="Oups! La page que vous cherchez n'existe pas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <h1 className='side_text'>NOT FOUND</h1>
            <h2 className='error_title' data-text='404'>404</h2>
            <p>ahahah vous n&apos;avez pas dit le mot magique !!!</p>
            <div className='image_404'>
            <Image src={nedry} alt="Dennis Nedry from Jurasic Park" layout="responsive" objectFit="cover" priority={true} />
            </div>
        </section>
    );
};

export default Custom404;