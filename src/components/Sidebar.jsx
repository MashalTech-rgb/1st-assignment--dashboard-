
const Sidebar = ( isSidebarOpen ) => {
  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-16"
      } bg-blue-800 text-white transition-all duration-300`}
    >
      <div className="p-4">
        <h2 className="text-lg font-bold text-center">
          {isSidebarOpen ? "Dashboard" : "D"}
        </h2>
      </div>
      <ul className="mt-6">
        <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
          {isSidebarOpen ? "Home" : "H"}
        </li>
        <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
          {isSidebarOpen ? "Profile" : "P"}
        </li>
        <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
          {isSidebarOpen ? "Settings" : "S"}
        </li>
        <li className="px-4 py-2 hover:bg-blue-600 cursor-pointer">
          {isSidebarOpen ? "Logout" : "L"}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
