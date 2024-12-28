import { useState } from "react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-black text-white transition-all duration-300`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold text-center">
            {isSidebarOpen ? "Dashboard" : "D"}
          </h2>
        </div>
        <ul className="mt-6">
          <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer border-white">
            {isSidebarOpen ? "Home" : "H"}
          </li>
          <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
            {isSidebarOpen ? "Profile" : "P"}
          </li>
          <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
            {isSidebarOpen ? "Settings" : "S"}
          </li>
          <li className="px-4 py-2 hover:bg-gray-800 cursor-pointer">
            {isSidebarOpen ? "Logout" : "L"}
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Menu Bar */}
        <div className="flex justify-between items-center bg-white shadow-md px-4 py-2">
          <button
            onClick={toggleSidebar}
            className="text-black bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
          >
            ☰
          </button>
          <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Admin</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-gray-700">Welcome to the Dashboard</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolore inventore cum delectus, reiciendis fugiat obcaecati commodi quibusdam tenetur. Soluta officia odio neque ad architecto ipsum aperiam quas natus ea..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
