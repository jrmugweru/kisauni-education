import { FaUserCircle } from "react-icons/fa";

function Topbar() {
  const today = new Date().toLocaleDateString();

  return (
    <header className="bg-white shadow px-8 py-5 flex justify-between items-center">

      <div>

        <h1 className="text-3xl font-bold text-[#003366]">
          Admin Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome to Kisauni Education Management System
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="font-semibold">
            Administrator
          </p>

          <p className="text-sm text-gray-500">
            {today}
          </p>
        </div>

        <FaUserCircle className="text-5xl text-[#003366]" />

      </div>

    </header>
  );
}

export default Topbar;