import { motion } from "framer-motion";

const ProblemOfTheDay = () => {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Problem of the Day</h2>
      <div className="bg-blue-100 p-4 rounded">
        <h3 className="text-lg font-semibold">Longest Palindromic Substring</h3>
        <p className="text-gray-600 mb-2">Difficulty: Medium</p>
        <p className="mb-4">
          Given a string s, return the longest palindromic substring in s.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Solve Now
        </button>
      </div>
    </motion.div>
  );
};

export default ProblemOfTheDay;
