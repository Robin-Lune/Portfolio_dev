import { useState, useEffect } from "react";

const Assistant = ({ idle, listening, found, notFound , bored,error}) => {
  const [Idle, setIdle] = useState(idle);
  

 
  const casse = ["(☓‿‿☓)", "(  ╥﹏╥)", "(  -__-)","(#__#  )"];

  return (
    <p className="assistant">
      {idle ? "(◕‿‿◕)" : null}
      {listening ? "(◕‿◕  )" : null}
      {found ? "(^‿‿^)" : null}
      {notFound ? casse[Math.floor(Math.random() * casse.length)] : null}
      {bored ? "(⇀‿‿↼)" : null}
      {error ? "( ⌐■_■)" : null}
    </p>
  );
};

export default Assistant;
