import { PersonIcon, Pencil1Icon } from "@radix-ui/react-icons";

export default function Profile() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center mr-4">
            <PersonIcon className="w-12 h-12 text-gray-800" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Rayan Jain</h2>
            <p className="text-gray-400">Level 42 | Rank: #123</p>
          </div>
        </div>
        <button className="bg-blue-300 text-gray-800 p-2 rounded-full">
          <Pencil1Icon className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold">150</p>
          <p className="text-sm text-gray-400">Problems Solved</p>
        </div>
        <div>
          <p className="text-2xl font-bold">30</p>
          <p className="text-sm text-gray-400">Day Streak</p>
        </div>
        <div>
          <p className="text-2xl font-bold">5</p>
          <p className="text-sm text-gray-400">Badges Earned</p>
        </div>
      </div>
    </div>
  );
}
