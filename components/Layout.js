import Menu from "./menu";
import LeftColumn from "./leftColumn";
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import Cursor from "./cursor";


const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 3500);
  }, []);
  return (
    <main className="ecran  crt">
      <div className="noise"></div>
      <Cursor/>
      <LeftColumn />
      {children}
      <Menu />

      {/* {isLoading ? <Loader /> : null} */}

    </main>
  );
};

export default Layout;
