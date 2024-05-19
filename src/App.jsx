import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Technologies from "./components/technologies/Technologies";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax/>
    </section>
    
    <section id="Portfolio">
      <Technologies/>
    </section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>

    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
