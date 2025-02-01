import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import topicsData from "../data.json";

const LearnPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6">Learn DSA</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topicsData.topics.map((topic) => (
          <Link key={topic.id} to={`/learn/${topic.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-2">{topic.name}</h2>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${topic.progress}%` }}
                ></div>
              </div>
              <p className="mt-2 text-gray-400">Progress: {topic.progress}%</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default LearnPage;
