import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import {
    FaTachometerAlt,
    FaBullhorn,
    FaExclamationCircle,
    FaUser,
    FaCog,
    FaSignOutAlt,
    FaSchool,
} from "react-icons/fa";

function AdminSidebar() {
    const [pendingCount, setPendingCount] = useState(0);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const handleLogout = () => {
        // Remove authentication data
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");

        // Optional: clear all local storage
        // localStorage.clear();

        // Redirect to home page
        navigate("/");
    };
    // const handleLogout = () => {

    //     localStorage.removeItem("access");
    //     localStorage.removeItem("refresh");
    //     localStorage.removeItem("user");

    //     window.location.href = "/admin-login";

    // };

    useEffect(() => {

        axios.get("/reports/")
            .then((res) => {

                const pending = res.data.filter(
                    report => report.status === "Pending"
                );

                setPendingCount(pending.length);

            });

    }, []);

    return (
        <aside className="w-64 min-h-screen bg-[#003366] text-white">

            <div className="p-6 border-b border-blue-800">
                <div className="flex items-center gap-3">
                    <FaSchool className="text-3xl text-yellow-400" />

                    <div>
                        <h2 className="font-bold text-lg">
                            Kisauni EMS
                        </h2>

                        <p className="text-sm text-gray-300">
                            {user?.username}
                        </p>
                    </div>
                </div>
            </div>

            <nav className="mt-6">

                <Link
                    to="/admin-dashboard"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-blue-800"
                >
                    <FaTachometerAlt />
                    Dashboard
                </Link>

                <Link
                    to="/admin-announcements"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-blue-800"
                >
                    <FaBullhorn />
                    Announcements
                </Link>



                <Link
                    to="/admin-reports"
                    className="flex items-center justify-between px-6 py-4 hover:bg-blue-800"
                >

                    <div className="flex items-center gap-3">
                        <FaExclamationCircle />
                        <span>Reports</span>
                    </div>

                    {pendingCount > 0 && (
                        <span className="bg-red-600 text-white rounded-full px-2 py-1 text-xs font-bold">
                            {pendingCount}
                        </span>
                    )}

                </Link>


                <Link
                    to="/admin-profile"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-blue-800"
                >
                    <FaUser />
                    Profile
                </Link>

                <Link
                    to="/admin-settings"
                    className="flex items-center gap-3 px-6 py-4 hover:bg-blue-800"
                >
                    <FaCog />
                    Settings
                </Link>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-6 py-4 hover:bg-red-700 mt-10 text-left"
                >
                    <FaSignOutAlt />
                    Logout
                </button>
            </nav>

        </aside>
    );
}

export default AdminSidebar;