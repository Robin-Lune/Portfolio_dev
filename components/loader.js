import { useEffect, useState } from "react";
import Image from "next/image";
import loaderImage from "../public/images/title.webp";


const Loader = () => {


  return (
    <div className="loader ">

      <div className="loading_image">
        <Image src={loaderImage} alt="logo de Robin LEBON" layout="responsive" objectFit="cover" priority={true} />
      </div>

      <div className="loading_bar_container">
        <div className="progress">
          <div className="progress-value"></div>
        </div>
        <p> LOADING... </p>
      </div>



    </div>
  );
};

export default Loader;
