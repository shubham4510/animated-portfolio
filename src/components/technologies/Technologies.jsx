import "./technologies.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const Technologies = () => {
  const ref = useRef();


  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Crafting seamless digital experiences
          <br /> with the power of technology
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/code2.webp" alt="" />
          <h1>
             My
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Technologies</motion.b>
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <h2>Front-end Devlopment</h2>
          <ul> 
            <li><img src="/html.png" alt="" /></li>
            <li><img src="/css.png" alt="" /></li>
            <li><img src="/js.png" alt="" /></li>
            <li><img src="/react.png" alt="" /></li>
            <li><img src="/tailwind.png" alt="" /></li>
          </ul>
        </motion.div>
       
      
      </motion.div>
    </motion.div>
  );
};

export default Technologies;