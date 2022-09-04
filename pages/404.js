import React from 'react';

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

        </section>
    );
};

export default Custom404;