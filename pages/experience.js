import Head from "next/head";

const Experience = () => {
  return (
    <div className="experience-container">

      <Head>
        <title>Robin LEBON - Experience</title>
        <meta name="description" content="Informations me concernant." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>tree /Experience </h1>
      <a href="./CV_LEBON_ROBIN_DEV_WEB.pdf" target="_blank" rel="noreferrer">
        <p className="download">( wget robin_lebon.cv )</p>
      </a>
      <div className="main-window">
        <h2>Robin LEBON</h2>
        <h3>Développeur Frontend Junior</h3>
        <h4 className="new-section">Formations</h4>

        <ul className="list">
          <li className="list-element">
            <p className="list-title">
              BAC+2 <span className="col">DEVELOPPEUR WEB</span> 2022
            </p>
            <br />
            <p className="description">
              Formation à distance, technologie principale: Javascript - Node Js
              / React -
            </p>
            <p className="description">
              Centre de formation (OPENCLASSROOMS) - Réunion - Paris
            </p>
          </li>

          <li className="list-element">
            <p className="list-title">
              BAC<span className="col">PHOTOGRAPHIE</span> 2014
            </p>
            <br />
            <p className="description">
              Formation professionnelle - Photographie commerciale
            </p>
            <p className="description">
              Centre de formation (STUDIO M) - Montpellier
            </p>
          </li>

          <li className="list-element">
            <p className="list-title">
              LICENSE PILOTE<span className="col">ULM / DRONE(S1-S3)</span> 2013
            </p>
            <br />
            <p className="description">Théorique instructeur </p>
            <p className="description">
              Centre de formation (PLANETAIR974 / DRONE974) - Réunion
            </p>
          </li>

          <li className="list-element">
            <p className="list-title">
              BEP<span className="col">ELECTRONIQUE</span> 2009
            </p>
            <br />
            <p className="description">Formation professionnelle </p>
            <p className="description">
              Centre de formation (PAUL LANGEVIN) - Réunion
            </p>
          </li>
        </ul>

        <h4 className="new-section">Expériences</h4>
        <ul className="list">
          <li className="list-element">
            <p className="list-title">
              PHOTOGRAPHE INDEPENDANT<span className="col">REUNION</span> 2019
            </p>
            <br />
            <p className="description">Photographe publicitaire</p>
          </li>

          <li className="list-element">
            <p className="list-title">
              TECHNICIEN INFORMATIQUE<span className="col">REUNION</span> 2017
            </p>
            <br />
            <p className="description">
              Technicien informatique, Système Admin., technicien matériel
              photo.
            </p>
          </li>

          <li className="list-element">
            <p className="list-title">
              ASSISTANT PHOTOGRAPHE<span className="col">MONTPELLIER</span> 2014
            </p>
            <br />
            <p className="description">
              Assistant prises de vues, post production, prises de vue pour
              BERNARD GALLAY Yacht Brokerage, Terre de vin.
            </p>
          </li>
        </ul>

        <h4 className="new-section">Compétences</h4>
        <ul className="list-simple">
          <li>REACT</li>
          <li>NODE JS</li>
          <li>NEXTJS</li>
          <li>MYSQL</li>
          <li>MONGODB</li>
          <li>GIT</li>
        </ul>

        <h4 className="new-section">Compétences Secondaire</h4>
        <ul className="list-simple">
          <li>SASS</li>
          <li>STYLED COMPONENT</li>
          <li>ELECTRON</li>
        </ul>

        <h4 className="new-section">Langues</h4>
        <ul className="list-simple">
          <li>
            <p>Anglais</p>
          </li>
          <li>
            <p>Espagnol</p>
          </li>

          <li>
            <p>Langue des signes française</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
