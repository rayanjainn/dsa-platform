import { useParams, Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import topicData from "../data.json";

const TutorialPage = () => {
  const { topicId, questionId } = useParams();
  const topic = topicData.topics.find((t) => t.id === topicId);
  const question = topic?.questions.find((q) => q.id === questionId);
  // This would typically come from an API or database
  //   const tutorialData = {
  //     title: "Two Sum",
  //     difficulty: "Easy",
  //     question:
  //       "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  //     intuition:
  //       "We can use a hash map to store the complement of each number as we iterate through the array.",
  //     timeComplexity: "O(n)",
  //     spaceComplexity: "O(n)",
  //     intuitiveCode: `def twoSum(nums, target):
  //     for i in range(len(nums)):
  //         for j in range(i + 1, len(nums)):
  //             if nums[i] + nums[j] == target:
  //                 return [i, j]
  //     return []`,
  //     optimizedCode: `def twoSum(nums, target):
  //     seen = {}
  //     for i, num in enumerate(nums):
  //         complement = target - num
  //         if complement in seen:
  //             return [seen[complement], i]
  //         seen[num] = i
  //     return []`,
  //   };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-800 text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{question.title}</h1>
      <span
        className={`px-2 py-1 rounded text-sm ${
          question.difficulty === "Easy"
            ? "bg-green-600"
            : question.difficulty === "Medium"
            ? "bg-yellow-600"
            : "bg-red-600"
        }`}
      >
        {question.difficulty}
      </span>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
        <p className="text-gray-300">{question.description}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Intuition</h2>
        <p className="text-gray-300">{question.intuition}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Complexity Analysis</h2>
        <p className="text-gray-300">
          Time Complexity: {question.timeComplexity}
        </p>
        <p className="text-gray-300">
          Space Complexity: {question.spaceComplexity}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Intuitive Solution</h2>
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-gray-300">
          <code>{question.intuitiveCode}</code>
        </pre>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Optimized Solution</h2>
        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-gray-300">
          <code>{question.optimizedCode}</code>
        </pre>
      </section>

      <div className="mt-8">
        <Link
          to={`/practice/${topicId}/${questionId}`}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          <FaCode className="mr-2" />
          Practice Now
        </Link>
      </div>
    </div>
  );
};

export default TutorialPage;
