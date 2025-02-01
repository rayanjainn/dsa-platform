import { motion } from "framer-motion";

const activities = [
  { id: 1, problem: "Two Sum", difficulty: "Easy", status: "Solved" },
  {
    id: 2,
    problem: "Merge K Sorted Lists",
    difficulty: "Hard",
    status: "Attempted",
  },
  { id: 3, problem: "Valid Parentheses", difficulty: "Easy", status: "Solved" },
  { id: 4, problem: "LRU Cache", difficulty: "Medium", status: "Solved" },
];

const RecentActivity = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <motion.li
            key={activity.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <span>{activity.problem}</span>
            <span
              className={`px-2 py-1 rounded ${
                activity.difficulty === "Easy"
                  ? "bg-green-200"
                  : activity.difficulty === "Medium"
                  ? "bg-yellow-200"
                  : "bg-red-200"
              }`}
            >
              {activity.difficulty}
            </span>
            <span
              className={`px-2 py-1 rounded ${
                activity.status === "Solved" ? "bg-green-400" : "bg-yellow-400"
              }`}
            >
              {activity.status}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
