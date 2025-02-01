import React, { useEffect, useState } from "react";

const ProgressRing = ({ radius, stroke, progress, color, delay = 0 }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (animatedProgress / 100) * circumference;

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, delay);
  }, [progress, delay]);

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{
          strokeDashoffset,
          transition: "stroke-dashoffset 2s ease-in-out",
        }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

const ProgressRings = ({ red = 50, yellow = 75, green = 90 }) => {
  return (
    <div className="relative w-64 h-64">
      {/* Green Ring */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <ProgressRing radius={100} stroke={10} progress={green} color="limegreen" delay={500} />
      </div>

      {/* Yellow Ring */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <ProgressRing radius={80} stroke={10} progress={yellow} color="gold" delay={250} />
      </div>

      {/* Red Ring */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <ProgressRing radius={60} stroke={10} progress={red} color="red" delay={0} />
      </div>
    </div>
  );
};

export default ProgressRings;
