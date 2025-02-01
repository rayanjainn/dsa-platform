import { useEffect, useRef } from "react";
import * as d3 from "d3";

const submissions = [
  { problem: "Two Sum", difficulty: "Easy", status: "Accepted" },
  { problem: "Add Two Numbers", difficulty: "Medium", status: "Wrong Answer" },
  { problem: "Longest Substring", difficulty: "Medium", status: "Accepted" },
  {
    problem: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    status: "Time Limit Exceeded",
  },
  { problem: "Palindrome Number", difficulty: "Easy", status: "Accepted" },
];

export default function RecentSubmissions() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const svg = d3.select(chartRef.current);
      const width = 300;
      const height = 200;
      const radius = Math.min(width, height) / 2;

      svg.selectAll("*").remove(); // Clear previous chart

      const g = svg
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      const color = d3
        .scaleOrdinal()
        .domain(["Easy", "Medium", "Hard"])
        .range(["#22c55e", "#eab308", "#ef4444"]);

      const pie = d3.pie().value(1);
      const arc = d3.arc().innerRadius(0).outerRadius(0); // Start with radius 0

      const arcs = g
        .selectAll("arc")
        .data(pie(submissions))
        .enter()
        .append("g")
        .attr("class", "arc");

      arcs
        .append("path")
        .attr("fill", (d) => color(d.data.difficulty))
        .attr("d", arc)
        .transition()
        .duration(1000)
        .attrTween("d", (d) => {
          const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
          return (t) =>
            arc({
              ...i(t),
              innerRadius: 0,
              outerRadius: radius * t,
            });
        });

      // Add labels
      arcs
        .append("text")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .style("opacity", 0)
        .text((d) => d.data.difficulty)
        .transition()
        .delay(1000)
        .duration(500)
        .style("opacity", 1);
    }
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Recent Submissions</h3>
      {/* <svg ref={chartRef} width="300" height="200"></svg> */}
      <ul className="mt-4 space-y-2">
        {submissions.map((submission, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{submission.problem}</span>
            <span
              className={`px-2 py-1 rounded text-sm ${
                submission.status === "Accepted"
                  ? "bg-green-500"
                  : submission.status === "Wrong Answer"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              }`}
            >
              {submission.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
