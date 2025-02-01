import React from "react";
import { motion } from "framer-motion";

const BarGraph = ({ array, highlighted }) => {
  return (
    <div className="flex items-end justify-center space-x-1 h-64">
      {array.map((value, index) => (
        <motion.div
          key={index}
          className={`w-6 rounded bg-blue-500 ${
            highlighted.includes(index) ? "bg-red-500" : ""
          }`}
          initial={{ height: `${value}%` }}
          animate={{ height: `${value}%` }}
          transition={{ duration: 0.5 }} // Slower transition
        />
      ))}
    </div>
  );
};

export default BarGraph;
