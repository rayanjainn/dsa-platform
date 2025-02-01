import { StarIcon } from "@radix-ui/react-icons";

const achievements = [
  { name: "Problem Solver", description: "Solved 100 problems" },
  { name: "Streak Master", description: "Maintained a 30-day streak" },
  { name: "Algorithm Ace", description: "Mastered 5 different algorithms" },
];

export default function Achievements() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4">Achievements</h3>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-blue-300 p-2 rounded-full mr-4">
              <StarIcon className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <p className="font-semibold">{achievement.name}</p>
              <p className="text-sm text-gray-400">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
