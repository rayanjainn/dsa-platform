import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Arrays", solved: 12, total: 20 },
  { name: "Linked Lists", solved: 8, total: 15 },
  { name: "Trees", solved: 5, total: 18 },
  { name: "Graphs", solved: 3, total: 12 },
  { name: "DP", solved: 7, total: 25 },
];

const ProgressChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Your Progress</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="solved" fill="#8884d8" name="Solved" />
          <Bar dataKey="total" fill="#82ca9d" name="Total" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProgressChart;
