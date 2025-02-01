import { useState } from "react";
import { useParams } from "react-router-dom";

const PracticePage = () => {
  const { topic, id } = useParams();
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  // This would typically come from an API or database
  const questionData = {
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
    ],
  };

  const handleRunCode = () => {
    // In a real application, this would send the code to a backend for execution
    setOutput("Code execution is not implemented in this demo.");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-800 text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{questionData.title}</h1>
      <p className="mb-4 text-gray-300">{questionData.description}</p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Examples:</h2>
        {questionData.examples.map((example, index) => (
          <div key={index} className="mb-4 bg-gray-700 p-4 rounded">
            <p>
              <strong>Input:</strong> {example.input}
            </p>
            <p>
              <strong>Output:</strong> {example.output}
            </p>
            <p>
              <strong>Explanation:</strong> {example.explanation}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Code Editor</h2>
        <textarea
          className="w-full h-64 p-4 bg-gray-900 text-gray-100 font-mono rounded"
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
          <pre className="bg-gray-900 p-4 rounded text-gray-300">{output}</pre>
        </div>
      )}
    </div>
  );
};

export default PracticePage;
