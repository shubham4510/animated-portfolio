import "./app.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import About from "./components/about/About.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Technologies />
      </section>
      {/* <section id="Portfolio">
      </section> */}
      
    </div>
  );
};

export default App;