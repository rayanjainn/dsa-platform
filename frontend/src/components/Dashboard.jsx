import ProgressChart from "./ProgressChart";
import RecentActivity from "./RecentActivity";
import ProblemOfTheDay from "./ProblemOfTheDay";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to DSA Mastery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProgressChart />
        <RecentActivity />
      </div>
      <ProblemOfTheDay />
    </div>
  );
};

export default Dashboard;
