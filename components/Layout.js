import Header from "../components/header";
import Footer from "../components/footer";
import SwitchBtn from "../components/switch";

const Layout = ({ children }) => {
  return (
    <main className="ecran  crt">
      <SwitchBtn />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
