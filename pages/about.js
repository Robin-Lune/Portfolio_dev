import { useState, useEffect } from "react";
// import Assistant from "../components/assistant";
import Head from "next/head";



const About = () => {
  return (
    <section className="about-container">
      <Head>
        <title>Robin LEBON - À propos</title>
        <meta
          name="description"
          content="Un assistant qui répond à vos questions à propos de moi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text_bio_container">
        <h1 className="text_bio_container__title" data-text="Développeur web Junior,">Développeur web Junior,</h1>
        <p className="text_bio_container__text">
          aussi loin que je me souvienne, l’informatique a toujours fait partie
          de ma vie. J’ai eu la «chance» de pouvoir bousiller mes rétines depuis
          tout petit! Mon père ayant été le premier importateur Apple à la
          Réunion et également l’un des premiers fournisseurs internet, ( Runnet
          ... les vieux qui s’en souviennent on vous voit !) . j’ai toujours eu
          les yeux rivés sur un écran à «bidouiller» et programmer. Je me vois
          encore entrer dans la salle des serveurs et être hypnotiser devant
          toutes ces lumières qui clignotent, ces lignes de codes qui défilent
          sur les écrans ...</p>
        <p className="text_bio_container__text"> Ha l’innocence !</p>

        <p className="text_bio_container__text"> Si j’avais su que des années plus
          tard ça m’aurait valu des nuits blanches et des prises de tête ... Hé
          bien je le referais surement ! :p <br /> Aujourdhui me voici donc à suivre
          les traces du papa en tant que développeur web Frontend, avec un pti
          coup de coeur pour ReactJS
        </p>
      </div>
      <div className="image_bio_container">
       <img src="./images/photoBio.jpg" alt="imade bio" className="image_bio_container__photo" />

      </div>
    </section>
  );
};

export default About;
