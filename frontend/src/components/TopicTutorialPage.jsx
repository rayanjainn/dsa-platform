import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import topicsData from "../data.json";
import SelectionSort from "./sorting/SelectionSort";
import MergeSort from "./sorting/MergeSort";
import QuickSort from "./sorting/QuickSort";
import { useState } from "react";

export const generateArray = () =>
  Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 10);
const TopicTutorialPage = () => {
  const { topicId } = useParams();
  const topic = topicsData.topics.find((t) => t.id === topicId);

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6">{topic.name} Tutorial</h1>
      <p className="mb-6 text-gray-300">{topic.description}</p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul className="list-disc list-inside space-y-2">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {topic.keyConcepts[0]}
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            {topic.keyConcepts[1]}
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            {topic.keyConcepts[2]}
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            {topic.keyConcepts[3]}
          </motion.li>
        </ul>
      </div>
      {/* Add more sections with animations as needed */}
      <div className="flex items-center justify-center m-20 gap-20">
        {topic.name === "Sorting" &&
          topic.questions.map((question) => {
            if (question.id === "selection-sort") {
              const [array, setArray] = useState(generateArray());
              return <SelectionSort array={array} setArray={setArray} />;
            }
            if (question.id === "merge-sort") {
              const [array, setArray] = useState(generateArray());
              return <MergeSort array={array} setArray={setArray} />;
            }
            if (question.id === "quick-sort") {
              const [array, setArray] = useState(generateArray());
              return <QuickSort array={array} setArray={setArray} />;
            }
          })}
      </div>
    </motion.div>
  );
};

export default TopicTutorialPage;
