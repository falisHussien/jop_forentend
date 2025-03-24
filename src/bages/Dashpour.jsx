import { Link, useNavigate } from "react-router-dom";
import { LogIn, LogOut, Phone, ClipboardList, User } from "lucide-react";

const Dashpourt = () => {
  const navigate = useNavigate(); // Helps in redirecting after logout

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user session
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="bg-gradient-to-b from-indigo-700 to-indigo-500 h-screen w-[20%] fixed p-5 shadow-xl flex flex-col">
      <h1 className="font-bold text-3xl text-white text-center pb-6">Admin</h1>

      <div className="space-y-4">
        <Link to="/dashboard" className="flex items-center gap-3 text-white text-lg font-medium hover:text-gray-300 transition">
          <User size={20} /> <span>Dashboard</span>
        </Link>

        <Link to="/applyr" className="flex items-center gap-3 text-white text-lg font-medium hover:text-gray-300 transition">
          <ClipboardList size={20} /> <span>Apply</span>
        </Link>

        <Link to="/contactr" className="flex items-center gap-3 text-white text-lg font-medium hover:text-gray-300 transition">
          <Phone size={20} /> <span>Contact</span>
        </Link>

       

        <button 
          onClick={handleLogout} 
          className="flex items-center gap-3 text-white text-lg font-medium hover:text-gray-300 transition">
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Dashpourt;
