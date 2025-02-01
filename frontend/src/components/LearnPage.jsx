import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const topics = [
  {
    name: "Arrays",
    difficulty: "Easy",
    questions: [
      { id: 1, title: "Two Sum" },
      { id: 2, title: "Best Time to Buy and Sell Stock" },
      { id: 3, title: "Contains Duplicate" },
    ],
  },
  {
    name: "Linked Lists",
    difficulty: "Medium",
    questions: [
      { id: 4, title: "Reverse Linked List" },
      { id: 5, title: "Detect Cycle" },
      { id: 6, title: "Merge Two Sorted Lists" },
    ],
  },
  {
    name: "Dynamic Programming",
    difficulty: "Hard",
    questions: [
      { id: 7, title: "Climbing Stairs" },
      { id: 8, title: "Coin Change" },
      { id: 9, title: "Longest Increasing Subsequence" },
    ],
  },
];

const LearnPage = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Learn DSA</h1>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <button
              className="w-full justify-between p-4 text-left flex items-center"
              onClick={() =>
                setExpandedTopic(expandedTopic === index ? null : index)
              }
            >
              <span className="text-xl font-semibold">{topic.name}</span>
              <div className="flex items-center gap-3">
                <div
                  className={`px-2 py-1 rounded text-sm ${
                    topic.difficulty === "Easy"
                      ? "bg-green-600"
                      : topic.difficulty === "Medium"
                      ? "bg-yellow-600"
                      : "bg-red-600"
                  }`}
                >
                  {topic.difficulty}
                </div>
                {expandedTopic === index ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </div>
            </button>
            {expandedTopic === index && (
              <div className="p-4 bg-gray-700">
                <ul className="space-y-2">
                  {topic.questions.map((question) => (
                    <li key={question.id}>
                      <Link
                        to={`/learn/${topic.name.toLowerCase()}/${question.id}`}
                        className="text-blue-400 hover:underline"
                      >
                        {question.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
