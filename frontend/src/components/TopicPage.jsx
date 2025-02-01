import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import topicsData from "../data.json";

const TopicPage = () => {
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
      <h1 className="text-3xl font-bold mb-6">{topic.name}</h1>
      <div className="mb-6">
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${topic.progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-gray-400">Progress: {topic.progress}%</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topic.questions.map((question) => (
          <Link key={question.id} to={`/practice/${topicId}/${question.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-lg shadow-lg ${
                question.difficulty === "Easy"
                  ? "bg-green-800"
                  : question.difficulty === "Medium"
                  ? "bg-yellow-800"
                  : "bg-red-800"
              }`}
            >
              <h2 className="text-xl font-semibold mb-2">{question.title}</h2>
              <p className="text-sm text-gray-300 mb-2">
                Difficulty: {question.difficulty}
              </p>
              <p className="text-sm text-gray-300">
                Status:{" "}
                {question.status === "completed"
                  ? "1/1"
                  : question.status === "attempted"
                  ? "0/1"
                  : "0/1"}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default TopicPage;
