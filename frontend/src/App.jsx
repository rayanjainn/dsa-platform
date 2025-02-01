import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import LearnPage from "./components/LearnPage";
import TopicPage from "./components/TopicPage";
import PracticePage from "./components/PracticePage";

function App() {
  const [isSidebarCompressed, setIsSidebarCompressed] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-gray-100">
        <Sidebar
          isCompressed={isSidebarCompressed}
          setIsCompressed={setIsSidebarCompressed}
        />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/learn/:topicId" element={<TopicPage />} />
                <Route
                  path="/practice/:topicId/:questionId"
                  element={<PracticePage />}
                />
                <Route path="/progress" element={<div>Progress Page</div>} />
                <Route
                  path="/discussions"
                  element={<div>Discussions Page</div>}
                />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
