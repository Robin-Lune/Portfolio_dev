import { useState, useEffect } from "react";

const assistant = ({ idle, listening, found, notFound , bored}) => {
  const [Idle, setIdle] = useState(idle);
  

 
  const casse = ["(☓‿‿☓)", "(  ╥﹏╥)", "(  -__-)"];

  return (
    <p className="assistant">
      {idle ? "(◕‿‿◕)" : null}
      {listening ? "(◕‿◕  )" : null}
      {found ? "(^‿‿^)" : null}
      {notFound ? casse[Math.floor(Math.random() * casse.length)] : null}
      {bored ? "(⇀‿‿↼)" : null}
    </p>
  );
};

export default assistant;
