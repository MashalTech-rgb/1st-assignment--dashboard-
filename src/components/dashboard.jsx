import { useState } from "react";
import Sidebar from "./Sidebar";
import MainMenu from "./mainmenu";
import Logo from '../../public/assets/Logo.png';
import shirt from "../../public/assets/shirt.jpg"

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classNameList.toggle("dark", !isDarkMode);
  };



  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Main Menu Bar */}
      <div className="flex justify-between items-center bg-white text-black dark:bg-gray-800 dark:text-gray-100 px-4 py-3 shadow-md z-10">
        <MainMenu toggleSidebar={toggleSidebar} toggleTheme={toggleTheme} isDarkMode={isDarkMode} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content Area with Sidebar and Content Section */}
      <div className="flex flex-row h-full">
        {/* Sidebar */}
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} bg-blue-800 dark:bg-gray-800`}>
          <Sidebar isSidebarOpen={isSidebarOpen} isDarkMode={isDarkMode} />
        </div>

        {/* Content Area */}
        <div className="flex-grow flex flex-col p-6 bg-white dark:bg-gray-900 overflow-y-auto">
  <h2 className="text-3xl font-semibold text-black dark:text-gray-100 mb-4">Products</h2>

  {/* Flex container for cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 m-5">
    {card.map((item, index) => {
      return (
        <div
          key={index}
          className="max-w-sm relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >

          <a href="#">
             <img
                  className="rounded-t-lg w-full"
                  src={shirt}
                  alt=""
                  width={50}
                  height={50}
                />
          </a>

          <div className="p-5">
            <a href="#" className="flex flex-wrap justify-between">
              <h5 className=" text-lg tracking-tight text-gray-900 dark:text-white">
              Album
              </h5>
            </a>
            <p className="m-1">
              From<span className="text-blue-600"> Rs. 420 </span>
              <span className="text-red-500 line-through"> Rs. 599</span>
            </p>
            <a
              href="#"
              className="flex flex-col items-center justify-center h-full p-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add
            </a>
          </div>
        </div>
      );
    })}
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
