import { Link } from "react-router-dom";
import { FaCode, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <FaCode className="mr-2" />
          DSA Mastery
        </Link>
        <div className="flex items-center">
          <Link to="/profile" className="flex items-center">
            <FaUser className="mr-2" />
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
