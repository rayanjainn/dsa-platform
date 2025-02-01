import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">DSA Mastery</h1>
        <div className="flex items-center">
          <FaUser className="mr-2" />
          <span>Profile</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
