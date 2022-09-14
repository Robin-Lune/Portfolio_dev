import Image from "next/image";
import scrollPng from "../public/images/scroll.webp";
import useReadingProgress from "./useReadingProgress";
import { useState, useEffect } from "react";
import Link from "next/link";


const LeftColumn = () => {
  const completion = useReadingProgress();
  const [completed, setCompleted] = useState(false);

  const changeCompletion = () => {
    if (completion > 90) {
      setCompleted(true);
    } else if (document.body.scrollHeight === window.innerHeight) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  useEffect(() => {
    changeCompletion();
  });

  // console.log(completed)

  return (
    <aside className="left_column">
      <Link href={'/'}>
      <a href="">
        <div className="left_column__line_container">
          <p className="left_column__line_container__text">HOME</p>

          <span className="line_container__line"></span>
          <span className="line_container__line"></span>
          <span className="line_container__line"></span>
          <span className="line_container__line"></span>
          <span className="line_container__line"></span>
          <span className="line_container__line"></span>
          <span className="line_container__line"></span>
          <span className="line_container__line"></span>
          <span className="line_container__line"></span>
        </div>

      </a>
      </Link>

      <div
        className="left_column__scroll_container"
        title="Si ça brille tu peux scroller .. Allez ! "
      >
        <Image
          src={scrollPng}
          alt="Picture of the author"
          width={35}
          height={35}
        />
        <p
          className={`scroll_container__text ${completed ? "--disengage" : ""}`}
          data-text="Scroll down"
        >
          Scroll down
        </p>
      </div>
    </aside>
  );
};

export default LeftColumn;
