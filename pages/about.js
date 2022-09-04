import { useState, useEffect } from "react";
import Head from "next/head";
import { Parallax } from "react-scroll-parallax";




const About = () => {
  return (
    <section className="about-container">
      <Head>
        <title>Robin LEBON - À propos</title>
        <meta
          name="description"
          content="A propos de moi. Ce qui m'a mené à devenir développeur web et web mobile à la Réunion."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax speed={20}className="text_bio_container" >
      <div className="text_bio_container__2">
        <h1 className="text_bio_container__title" data-text="Développeur web Junior,">Développeur web Junior,</h1>
        <p className="text_bio_container__text">
          aussi loin que je me souvienne, l’informatique a toujours fait partie
          de ma vie. J’ai eu la «chance» de pouvoir bousiller mes rétines depuis
          tout petit! Mon père ayant été le premier importateur Apple à la
          Réunion et également l’un des premiers fournisseurs internet, (Runnet
          ... les vieux qui s’en souviennent force à vous !) . j’ai toujours eu
          les yeux rivés sur un écran à «bidouiller» et programmer. Je me vois
          encore entrer dans la salle des serveurs et être hypnotisé devant
          toutes ces lumières qui clignotent, ces lignes de codes qui défilent
          sur les écrans ...</p>
        <p className="text_bio_container__text"> Ha l’innocence !</p>

        <p className="text_bio_container__text"> Si j’avais su que des années plus
          tard ça m’aurait valu des nuits blanches et des prises de tête ... éh
          bien je le referais sûrement ! :p <br /> Aujourdhui me voici donc à suivre
          les traces du Papa mais en tant que développeur web.
        </p>
      </div>
      </Parallax>
      <Parallax speed={-5}className="image_bio_container" >
      
      <div className="image_bio_container__2">
       <img src="./images/photoBio.jpg" alt="imade bio" className="image_bio_container__photo" />

      </div>
      </Parallax>
    </section>
  );
};

export default About;
