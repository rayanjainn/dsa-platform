import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import LearnPage from "./components/LearnPage";
import TutorialPage from "./components/TutorialPage";
import PracticePage from "./components/PracticePage";

function App() {
  const [isSidebarCompressed, setIsSidebarCompressed] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Navbar />
        <div className="flex flex-1">
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/learn"
                element={
                  <div className="flex">
                    <div className="flex-1">
                      <LearnPage />
                    </div>
                    <Sidebar isCompressed={isSidebarCompressed} />
                    <button
                      className="p-2 bg-gray-700 text-gray-100 hover:bg-gray-600"
                      onClick={() =>
                        setIsSidebarCompressed(!isSidebarCompressed)
                      }
                    >
                      {isSidebarCompressed ? ">" : "<"}
                    </button>
                  </div>
                }
              />
              <Route path="/learn/:topic/:id" element={<TutorialPage />} />
              <Route path="/practice/:topic/:id" element={<PracticePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
