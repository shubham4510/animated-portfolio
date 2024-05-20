import "./about.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import resumePDF from "../assets/ShubhamBhardwajResume.docx.pdf";

const variants = {
  initial: {
    x: -300,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer">
        <p>
          Curiosity-driven, diving into
          <br /> the world of Web Development
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/code.jpeg" alt="code" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Full Stack</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>Developer</h1>
          <button>About Me</button>
        </div>
      </motion.div>
      <motion.div className="aboutContainer">
        <div className="box">
          <h2>Who I am</h2>
          <p>
            I'm currently pursuing my Bachelor's in Computer Applications at the
            International Institute of Technology and Management College,
            focusing on developing problem-solving skills and mastering web
            development. I have a strong foundation in HTML, CSS, JavaScript,
            and React and also familiar with Express for backend development
            and MongoDB for database management. While not yet an expert, I
            continuously enhance my skills. I am actively seeking a frontend
            position where I can combine my technical expertise with
            problem-solving abilities, teamwork skills, and curiosity to
            contribute to the development of innovative web applications.
          </p>
          <motion.a
            className="button is-primary"
            href={resumePDF}
            download="ShubhamBhardwajResume.docx.pdf"
          >
            <span className="icon">
              <i className="fas fa-download"></i>
            </span>
            <span>Download My Resume!</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
