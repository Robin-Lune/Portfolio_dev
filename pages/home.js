import Head from "next/head";
import {useState} from 'react';
import { Parallax } from "react-scroll-parallax";



const Home = () => {

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section className="home">
      <img
        src="./images/triangle2.png"
        alt="image d'un triangle"
        className="background"
      />

     

      <div className="main_text_container">
      <Parallax speed={-10}>

        <p>
          Je suis <span className="makeMeBiggerMfkr" 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          data-text="Robin LEBON"
          title="C'est ici pour faire apparaître ma tronche"
          >Robin LEBON</span>
        </p>
        <p className="main_text_container__myJob">développeur web Frontend,</p>
        <p>photographe, vidéaste.</p>
        </Parallax>
        <Parallax speed={5} >
        <p className="otw">#open_to_work</p>
        </Parallax>
      </div>
      
      <div className="portrait_container">
        <img src="./images/Portrait-2.png" alt="" className={`portrait ${isHovering ?"" : "--hidden" }`}/>
        <img src="./images/Portrait-2.png" alt="" className={`portrait1 ${isHovering ?"" : "--hidden" }`}/>
        <img src="./images/Portrait-2.png" alt="" className={`portrait2 ${isHovering ?"" : "--hidden" }`}/>
      </div>

      <div className="right_side_text">
        <h1>FRONTEND</h1>
        <h2>developer</h2>
      </div>

    </section>
  );
};

export default Home;
