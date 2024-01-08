import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-adark "
    : "text-slate-300";
  return (
    <button onClick={selectTab}>
      <p className={`mr-4 font-semibold text-3xl  ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-yellow-300 mt-1 mr-3 hover:text-yellow-900"
      >
        {" "}
      </motion.div>
    </button>
  );
};

export default TabButton;
