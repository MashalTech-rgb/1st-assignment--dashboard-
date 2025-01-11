
const MainMenu = ( toggleSidebar ) => {
  return (
    <div className="flex justify-between items-center bg-blue-800 shadow-md px-4 py-2">
      <button
        onClick={toggleSidebar}
        className="text-white bg-blue-600 px-2 py-1 rounded-md hover:bg-blue-500 focus:outline-none"
      >
        ☰
      </button>
      <h1 className="text-xl font-bold text-white">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-white">Admin</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default MainMenu;
