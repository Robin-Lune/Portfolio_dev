import { useState, useEffect } from "react";
import Assistant from "../components/assistant";

const about = () => {
  const [bored, setBored] = useState(false);
  const [idle, setIdle] = useState(true);
  const [listening, setListening] = useState(false);
  const [found, setFound] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    const animation = setInterval(() => {
      if (idle) {
        setIdle(false);
        setBored(true);
        console.log(bored);
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
        console.log(bored);
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
        console.log(bored);
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
        console.log(bored);
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
    if (message.toLowerCase() === "bonjour") {
      setResponse(
        "B0njour comment puis-je v0us a1der? Tapez 'aide' pour avoir une liste générale des questions possibles."
      );
      setListening(false);
      setFound(true);
    } else if (message.toLowerCase() === "aide") {
      setResponse(
        `Qui es tu? Quelle âge as-tu? Quels sont tes loisirs? Quel salaire souhaites-tu? Mais où se trouve ton CV? Et encore quelques petites folies!`
      );
      setListening(false);
      setFound(true);
    } else if (
      message.toLowerCase().includes("vas-tu") ||
      message.toLowerCase().includes("vas tu") ||
      message.toLowerCase().includes("tu vas") ||
      message.toLowerCase().includes("ça va")
    ) {
      setResponse(
        "Je vais bien, merci. Grâce au concepteur mon L0gicie1 antivirus est à jour."
      );
      setListening(false);
      setFound(true);
    } else if (
      message.toLowerCase().includes("ton nom") ||
      message.toLowerCase().includes("ton prénom") ||
      message.toLowerCase().includes("qui es tu") ||
      message.toLowerCase().includes("qui es-tu")
    ) {
      setResponse(
        "Je suis R0b1 et je suis créé à partir de la mém0ire numérisé de mon concepteur."
      );
      setListening(false);
      setFound(true);
    } else if (
      message.toLowerCase().includes("quel est ton age") ||
      message.toLowerCase().includes("quel âge as-tu") ||
      message.toLowerCase().includes("quel âge as tu") ||
      message.toLowerCase().includes("quel âge") ||
      message.toLowerCase().includes("quel age")
    ) {
      setResponse(
        "Je suis agé de quelques cycles seulement à l'éche11e humaine celà c0rrespond à environs ... 31 ans"
      );
      setListening(false);
      setFound(true);
    } else if (
      message.toLowerCase().includes("loisirs") ||
      message.toLowerCase().includes("hobbys") ||
      message.toLowerCase().includes("hobbies")
    ) {
      setResponse(
        "J'aime les belles motos, l'aéronautique, je suis un fervent échephile mais mon Elo ne vole pas trés haut. J'aime avant tout le cha11enge que ce soit dans les jeux vidé0s, les jeux de société, les sp0rts extrême."
      );
      setListening(false);
      setFound(true);
    } else if (message.toLowerCase().includes("salaire")) {
      setResponse(
        "Il n'y a malheureusment pas assez de 0 et de 1 dans ma mémoire pour exprimer le salaire que je souhaite."
      );
      setListening(false);
      setFound(true);
    } else if (
      message.toLowerCase().includes("cv") ||
      message.toLowerCase().includes("curriculum vitae") ||
      message.toLowerCase().includes("curriculum") ||
      message.toLowerCase().includes("vitae")
    ) {
      setResponse(
        "M0n CV se trouve en haut de la page Expérience. C1iquez sur le lien 'wget robin_lebon.cv' pour télécharger le fichier."
      );
      setListening(false);
      setFound(true);
    } else if (
      message.toLowerCase().includes("expérience") ||
      message.toLowerCase().includes("professionnel") ||
      message.toLowerCase().includes("travail") ||
      message.toLowerCase().includes("photo")
    ) {
      setResponse(
        "Je suis à la base Auteur Photographe, mais suite à tous ces aléas du Covid ... j'ai décidé de faire une reconversion professionnelle dans un autre mêtier qui me passionnait et dans lequel j'avais déja des compétences."
      );
      setListening(false);
      setFound(true);
    } else {
      setResponse(
        "Désolé, je n'ai pas compris votre demande. Tapez 'aide' pour avoir une liste générale des questions possibles."
      );
      setListening(false);
      setIdle(false);
      setFound(false);
      setNotFound(true);
    }
  };

  const handleSpeech = (e) => {
    setMessage(e.target.value);
    setNotFound(false);
    setFound(false);
    setIdle(false);
    setListening(true);
    console.log(message);
  };
  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      getReponse(message);
      e.target.value = "";
      console.log("Enter");
    }
  };

  return (
    <div className="about-container">
      <h1>./About.sh</h1>
      <div className="assistant-container">
        <div className="dialog">
          <p className="text-assistant">
            {response
              ? response
              : "Bonjour, je suis une partie numérisée de la mémoire de Robin ...qui certe n'est pas énorme dèja de base. Mais je ferais mon possible pour répondre à vos questions. "}
          </p>
          <input
            type="text"
            className="input-text"
            placeholder="Votre question ici"
            onChange={(e) => handleSpeech(e)}
            onKeyDown={(e) => handlekeyPress(e)}
            autoFocus
          />
        </div>
        <div className="assistant-image">
          <Assistant
            idle={idle}
            listening={listening}
            found={found}
            notFound={notFound}
            bored={bored}
          />
        </div>
      </div>
    </div>
  );
};

export default about;
