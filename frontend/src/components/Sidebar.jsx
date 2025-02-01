import { Link } from "react-router-dom";
import { FaHome, FaBook, FaChartBar, FaComments } from "react-icons/fa";

const Sidebar = ({ isCompressed }) => {
  return (
    <div
      className={`bg-gray-800 text-gray-100 ${
        isCompressed ? "w-16" : "w-64"
      } min-h-screen p-4 transition-all duration-300`}
    >
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FaHome className="mr-2" />
              {!isCompressed && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/learn"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FaBook className="mr-2" />
              {!isCompressed && <span>Learn</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/progress"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FaChartBar className="mr-2" />
              {!isCompressed && <span>Progress</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/discussions"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
            >
              <FaComments className="mr-2" />
              {!isCompressed && <span>Discussions</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
