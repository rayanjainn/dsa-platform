import Profile from "./Profile";
import RecentSubmissions from "./RecentSubmissions";
import Achievements from "./Achievement";
import ThemeCustomizer from "./Theme";

export default function Progress() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">DSAlchemy Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Profile />
            <div className="mt-4 h-64 w-full bg-gray-800 rounded-lg p-4 flex flex-col justify-between">
              <div className="flex justify-center items-center h-40">
                <svg width="200" height="160" viewBox="0 0 200 160">
                  <circle
                    cx="100"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="12"
                    strokeDasharray="439.8 439.8"
                    strokeDashoffset="439.8"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="439.8"
                      to="44"
                      dur="2s"
                      fill="freeze"
                    />
                  </circle>
                  <circle
                    cx="100"
                    cy="80"
                    r="50"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="12"
                    strokeDasharray="314.2 314.2"
                    strokeDashoffset="314.2"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="314.2"
                      to="94.3"
                      dur="2s"
                      fill="freeze"
                    />
                  </circle>
                  <circle
                    cx="100"
                    cy="80"
                    r="30"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="12"
                    strokeDasharray="188.5 188.5"
                    strokeDashoffset="188.5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="188.5"
                      to="113.1"
                      dur="2s"
                      fill="freeze"
                    />
                  </circle>
                  <text
                    x="100"
                    y="75"
                    textAnchor="middle"
                    fill="white"
                    fontSize="24"
                    fontWeight="bold"
                  >
                    <animate
                      attributeName="innerHTML"
                      from="0%"
                      to="75%"
                      dur="2s"
                      fill="freeze"
                    />
                  </text>
                  <text
                    x="100"
                    y="65"
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                  >
                    Overall
                  </text>
                  <text
                    x="100"
                    y="80"
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                  >
                    450/600
                  </text>
                </svg>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-center">
                  <p className="font-bold text-green-400">
                    <span className="animate-percentage" data-value="90">
                      0
                    </span>
                    %
                  </p>
                  <p>Easy</p>
                  <p className="text-xs mt-1">180/200</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-yellow-400">
                    <span className="animate-percentage" data-value="70">
                      0
                    </span>
                    %
                  </p>
                  <p>Medium</p>
                  <p className="text-xs mt-1">210/300</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-red-400">
                    <span className="animate-percentage" data-value="60">
                      0
                    </span>
                    %
                  </p>
                  <p>Hard</p>
                  <p className="text-xs mt-1">60/100</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Achievements />
            <RecentSubmissions />
          </div>
        </div>
        <ThemeCustomizer />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        function animatePercentage() {
          const elements = document.querySelectorAll('.animate-percentage');
          elements.forEach(el => {
            const target = parseInt(el.getAttribute('data-value'));
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
              current += increment;
              el.textContent = Math.round(current);
              if (current >= target) {
                clearInterval(timer);
                el.textContent = target;
              }
            }, 20);
          });
        }
        setTimeout(animatePercentage, 100);
      `,
        }}
      />
    </div>
  );
}
