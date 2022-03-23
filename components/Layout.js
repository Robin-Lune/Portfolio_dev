import Header from "../components/header";
import Footer from "../components/footer";
import SwitchBtn from "../components/switch";
import { useEffect, useState } from "react";
import Loader from "../components/loader";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 3500);
  }, []);
  return (
    <main className="ecran  crt">
      <SwitchBtn />
      <Header />
      {children}
      <Footer />
      {isLoading ? <Loader /> : null}

    </main>
  );
};

export default Layout;
