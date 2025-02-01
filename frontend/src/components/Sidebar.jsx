import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaChartBar, FaComments, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = ({ isCompressed, setIsCompressed }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: FaHome, label: "Dashboard" },
    { path: "/learn", icon: FaBook, label: "Learn" },
    { path: "/progress", icon: FaChartBar, label: "Progress" },
    { path: "/discussions", icon: FaComments, label: "Discussions" },
  ];

  return (
    <motion.div
      className={`bg-gray-800 text-gray-100 ${
        isCompressed ? "w-16" : "w-64"
      } min-h-screen p-4 transition-all duration-300`}
      initial={false}
      animate={{ width: isCompressed ? 64 : 256 }}
    >
      <button
        className="w-full flex justify-center items-center mb-8"
        onClick={() => setIsCompressed(!isCompressed)}
      >
        <FaBars size={24} />
      </button>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-2 rounded transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-700"
                }`}
              >
                <item.icon className="mr-2" size={20} />
                {!isCompressed && <span>{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
