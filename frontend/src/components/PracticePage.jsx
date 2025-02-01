import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import topicsData from "../data.json";

const PracticePage = () => {
  const { topicId, questionId } = useParams();
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const topic = topicsData.topics.find((t) => t.id === topicId);
  const question = topic?.questions.find((q) => q.id === questionId);

  if (!topic || !question) {
    return <div>Question not found</div>;
  }

  const handleRunCode = () => {
    setOutput("Code execution is not implemented in this demo.");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto flex"
    >
      <div className="w-1/2 pr-4">
        <h1 className="text-3xl font-bold mb-4">{question.title}</h1>
        <p className="mb-4 text-gray-300">Difficulty: {question.difficulty}</p>
        <p className="mb-4 text-gray-300">
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target.
        </p>
        <h2 className="text-xl font-semibold mb-2">Examples:</h2>
        <div className="mb-4 bg-gray-800 p-4 rounded">
          <p>
            <strong>Input:</strong> nums = [2,7,11,15], target = 9
          </p>
          <p>
            <strong>Output:</strong> [0,1]
          </p>
          <p>
            <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we
            return [0, 1].
          </p>
        </div>
      </div>
      <div className="w-1/2 pl-4">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Code Editor</h2>
          <textarea
            className="w-full h-64 p-4 bg-gray-800 text-gray-100 font-mono rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleRunCode}
        >
          Run Code
        </button>
        {output && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Output</h2>
            <pre className="bg-gray-800 p-4 rounded text-gray-300">
              {output}
            </pre>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PracticePage;
