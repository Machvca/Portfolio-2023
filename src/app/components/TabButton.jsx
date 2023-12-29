import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-slate-100 "
    : "text-slate-300";
  return (
    <button onClick={selectTab}>
      <p className={`mr-4 font-semibold text-2xl text-adark hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-yellow-200 mt-1 mr-3"
      >
        {" "}
      </motion.div>
    </button>
  );
};

export default TabButton;
