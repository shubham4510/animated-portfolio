import { motion, spring } from "framer-motion";
import { useState } from "react";

const Test = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        visible: {
            opacity:1,
            x:1000,
            transition:{
                type:spring
            }
        },
        hidden:{
            opacity:0
        }
    }

    const items = [
        "item1",
        "item2",
        "item3",
        "item4",
    ]
  return (
    <div className="course">
     <motion.ul>
        {
            items.map((item)=>(
                <motion.li key={item}>{item}</motion.li>
            ))
        }
     </motion.ul>
    </div>
  );
};

export default Test;
