import { useState, useEffect } from "react";
import Assistant from "../components/assistant";
import Head from "next/head";

const About = () => {
  const [bored, setBored] = useState(false);
  const [idle, setIdle] = useState(true);
  const [listening, setListening] = useState(false);
  const [found, setFound] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const animation = setInterval(() => {
      if (idle) {
        setIdle(false);
        setBored(true);
        // console.log(bored);
        setTimeout(() => {
          setBored(false);
          setIdle(true);
          console.log(bored);
        }, 500);
      }
      if (listening) {
        setBored(true);
        setNotFound(false);
        setFound(false);
        setIdle(false);
        setListening(false);
        // console.log(bored);
        setTimeout(() => {
          setBored(false);
          setNotFound(false);
          setFound(false);
          setIdle(false);
          setListening(true);
        }, 500);
      }
      if (found) {
        setBored(true);
        setFound(false);
        setNotFound(false);
        setListening(false);
        setIdle(false);
        // console.log(bored);
        setTimeout(() => {
          setBored(false);
          setNotFound(false);
          setListening(false);
          setIdle(false);
          setFound(true);
        }, 500);
      }
      if (notFound) {
        setBored(true);
        setNotFound(false);
        setListening(false);
        setFound(false);
        setIdle(false);
        // console.log(bored);
        setTimeout(() => {
          setBored(false);
          setNotFound(false);
          setListening(false);
          setIdle(false);
          setNotFound(true);
        }, 500);
      }
    }, Math.floor(Math.random() * 6000) + 3000);
    // }, 5000);

    return () => clearInterval(animation);
  }, [bored, idle, found, listening, notFound]);

  const getReponse = (message) => {
    if (
      message.toLowerCase() === "bonjour" ||
      message.toLowerCase() === "bonjour " ||
      message.toLowerCase() === "salut" ||
      message.toLowerCase() === "coucou"
    ) {
      setResponse(
        "B0njour comment puis-je v0us a1der? Tapez 'AIDE' ou 'HELP' pour avoir une liste g??n??rale des questions possibles."
      );
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else if (
      message.toLowerCase() === "aide" ||
      message.toLowerCase() === "help"
    ) {
      setResponse(
        `Qui es tu? Quelle ??ge as-tu? Quels sont tes loisirs? Quel salaire souhaites-tu? Mais o?? se trouve ton CV? Et encore d'autres petites folies!`
      );
      setListening(false);
      setFound(true);
    } else if (
      message.toLowerCase().includes("vas-tu") ||
      message.toLowerCase().includes("vas tu") ||
      message.toLowerCase().includes("tu vas") ||
      message.toLowerCase().includes("??a va")
    ) {
      setResponse(
        "Je vais bien, merci. Gr??ce au concepteur mon L0gicie1 antivirus est ?? jour."
      );
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else if (
      message.toLowerCase().includes("ton nom") ||
      message.toLowerCase().includes("ton pr??nom") ||
      message.toLowerCase().includes("qui es tu") ||
      message.toLowerCase().includes("qui es-tu")
    ) {
      setResponse(
        "Je suis R0b1 et je suis cr???? ?? partir de la m??m0ire num??ris?? de mon concepteur."
      );
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else if (
      message.toLowerCase().includes("robin") ||
      message.toLowerCase().includes("est robin")
    ) {
      setResponse(
        "Robin est mon c0ncepteur. Il a 31 ans, il aime passer son temps libre ?? programmer des outils num??riques, ?? photographier et jouer de la musique. "
      );
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else if (
      message.toLowerCase().includes("quel est ton age") ||
      message.toLowerCase().includes("quel ??ge as-tu") ||
      message.toLowerCase().includes("quel ??ge as tu") ||
      message.toLowerCase().includes(" age") ||
      message.toLowerCase().includes(" ??ge")
    ) {
      setResponse(
        "Je suis ag?? de quelques cycles seulement, ?? l'??che11e humaine cel?? c0rrespond ?? environs ... 31 ans, plus ou moins le m??me ??ge que Robin."
      );
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else if (
      message.toLowerCase().includes("loisirs") ||
      message.toLowerCase().includes("hobbys") ||
      message.toLowerCase().includes("hobbies")
    ) {
      setResponse(
        "J'aime les belles motos, l'a??ronautique, je suis un fervent ??chephile mais mon Elo ne vole pas tr??s haut. J'aime avant tout le cha11enge que ce soit dans les jeux vid??0s, les jeux de soci??t??, les sp0rts extr??mes."
      );
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else if (message.toLowerCase().includes("salaire")) {
      setResponse(
        "Il n'y a malheureusement pas assez de 0 et de 1 dans ma m??moire pour exprimer le salaire que je souhaite."
      );
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else if (
      message.toLowerCase().includes("cv") ||
      message.toLowerCase().includes("curriculum vitae") ||
      message.toLowerCase().includes("curriculum") ||
      message.toLowerCase().includes("vitae")
    ) {
      setResponse(
        "M0n CV se trouve en haut de la page Exp??rience. C1iquez sur le lien 'wget robin_lebon.cv' pour t??l??charger le fichier. Ou vous pouvez taper 'wget' dans la barre ci-dessous."
      );
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else if (
      message.toLowerCase().includes("exp??rience") ||
      message.toLowerCase().includes("professionnelle") ||
      message.toLowerCase().includes("travail") ||
      message.toLowerCase().includes("photo")
    ) {
      setResponse(
        "Je suis ?? la base Auteur Photographe, mais suite ?? tous ces al??as du Covid ... j'ai d??cid?? de faire une reconversion professionnelle dans un autre m??tier qui me passionnait et dans lequel j'avais d??j?? des comp??tences."
      );
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else if (
      message.toLowerCase().includes("cd projects") ||
      message.toLowerCase().includes("ls projects") ||
      message.toLowerCase().includes("ls -a projects") ||
      message.toLowerCase().includes("/projects")
    ) {
      window.location.href = "/projects";
    } else if (
      message.toLowerCase().includes("/experience") ||
      message.toLowerCase().includes("tree /experience") ||
      message.toLowerCase().includes("cd experience")
    ) {
      window.location.href = "/experience";
    } else if (
      message.toLowerCase().includes("contact") ||
      message.toLowerCase().includes("touch") ||
      message.toLowerCase().includes("mail")
    ) {
      window.location.href = "/contact";
    } else if (
      message.toLowerCase().includes("./about.sh") ||
      message.toLowerCase().includes("./about")
    ) {
      setResponse(" Le programme est d??j?? en cours d'??x??cution...");
      setListening(false);
      setError(true);
      setShowMessage(true);
    } else if (message.toLowerCase().includes("wget")) {
      var anchor = document.createElement("a");
      anchor.href = "/CV_LEBON_ROBIN_DEV_WEB.pdf";
      anchor.target = "_blank";
      anchor.click();
    } else if (
      message.toLowerCase().includes("clear") ||
      message.toLowerCase().includes("clr")
    ) {
      setResponse(
        "Bonjour, je suis une partie num??ris??e de la m??moire de Robin ...qui certe n'est pas ??norme d??ja de base. Mais je ferai mon possible pour r??pondre ?? vos questions. "
      );
      setListening(false);
      setFound(false);
      setIdle(true);
    } else if (
      message.toLowerCase() === "whoami" ||
      message.toLowerCase() === "who am i"
    ) {
      setResponse("root");
      setListening(false);
      setFound(true);
      setShowMessage(true);
    } else {
      setResponse(
        "D??sol??, je n'ai pas compris votre demande. Tapez 'AIDE' ou 'HELP' pour avoir une liste g??n??rale des questions possibles."
      );
      setListening(false);
      setIdle(false);
      setFound(false);
      setNotFound(true);
      setShowMessage(true);
    }
  };

  const handleSpeech = (e) => {
    setMessage(e.target.value);
    setNotFound(false);
    setFound(false);
    setIdle(false);
    setShowMessage(false);
    setError(false);
    setListening(true);
    // console.log(message);
  };
  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      getReponse(message);
      e.target.value = "";
      if (window.innerWidth < 1025){
        e.target.blur();
      }
      // console.log("Enter");
    }
  };

  return (
    <div className="about-container">
      <Head>
        <title>Robin LEBON - ?? propos</title>
        <meta
          name="description"
          content="Un assistant qui r??pond ?? vos questions ?? propos de moi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>./About.sh</h1>
      <div className="assistant-container">
        <div className="dialog">
          <p className="text-assistant">
            R0b1: <br />
            {response
              ? response
              : "Bonjour, je suis une partie num??ris??e de la m??moire de Robin ...qui certes n'est pas ??norme d??ja de base. Mais je ferai mon possible pour r??pondre ?? vos questions. "}
          </p>
          {showMessage ? (
            <p>
              Question: <br /> {message}
            </p>
          ) : null}
          <div className="input-container">
            <input
              autoFocus={false}
              type="text"
              className="input-text"
              placeholder="Votre question ici"
              onChange={(e) => handleSpeech(e)}
              onKeyDown={(e) => handlekeyPress(e)}
            />
          </div>
        </div>
        <div className="assistant-image">
          <Assistant
            idle={idle}
            listening={listening}
            found={found}
            notFound={notFound}
            bored={bored}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
