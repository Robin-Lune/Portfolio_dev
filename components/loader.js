import { useEffect, useState } from "react";

const Loader = () => {

  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [blink1, setBlink1] = useState(true);
  const [blink2, setBlink2] = useState(false);
  const [blink3, setBlink3] = useState(false);



  
  useEffect( () => {
    
    setTimeout(function () {
      setBlink1(false);
      setLoading2(true);
      setBlink2(true);
    }, 1500);

    setTimeout(function () {
      setBlink2(false);
      setLoading3(true);
      setBlink3(true);
    }, 2500);
  }, []);

  return (
    <div className="loader crt">
      <div className="box-loader">
        <p className="text1">
          {">"} IPv4 supported
          <br />
          {">"} IPv6 supported <br />
          {">"} Verifying Network Data ...
          <br />
          {">"} All Checked <br />
          {">"} Initializing system{" "}
          <span className={blink1 ? "content-loader" : "hide"}>|</span>
        </p>
        <p className={`text2 ${loading2 ? "" : "hide"}`}>
          {">"} Starting Server <span className={blink2 ? "content-loader" : "hide"}>|</span>
        </p>
        <p className={`text2 ${loading3 ? "" : "hide"}`}>
          {">"} root@remoteHost:~#{" "}
          <span className={blink3 ? "content-loader" : "hide"}>|</span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
