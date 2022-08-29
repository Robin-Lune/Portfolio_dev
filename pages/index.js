import About from "./about";
import Contact from "./contact";
import Home from "./home";



const Index = () => {

  return (
    <div className="index_container">
      <Home />
      <About/>
      <Contact/>
    </div>
  );
};

export default Index;
