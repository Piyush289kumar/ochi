import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-24 -mb-2 rounded-t-2xl bg-[#004D43] flex">
      <div className="text border-t-[1px] border-b-[1px] border-green-100 flex tracking-tighter overflow-hidden whitespace-nowrap">
        {["WE ARE OCHI", "WE ARE OCHI"].map((item, idx) => (
          <motion.h1
            key={idx}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            className="text-[45vh] tracking-tighter leading-none font-bold -mt-5 mb-3 text-white pr-10"
          >
            {item}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
