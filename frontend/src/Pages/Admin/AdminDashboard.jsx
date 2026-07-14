import AdminSidebar from "../../Components/Admin/sidebar";
import DashboardCard from "../../Components/Admin/DashboardCards";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { FaCheckCircle } from "react-icons/fa";

import {
    FaBullhorn,
    FaExclamationCircle,
    FaUser
} from "react-icons/fa";


function AdminDashboard() {
    const [stats, setStats] = useState({
        announcements: 0,
        pending: 0,
        reviewed: 0,
        resolved: 0,
    });

    useEffect(() => {

        Promise.all([
            axios.get("/announcements/"),
            axios.get("/reports/"),
        ])
            .then(([announcementsRes, reportsRes]) => {

                const reports = reportsRes.data;

                setStats({
                    announcements: announcementsRes.data.length,
                    pending: reports.filter(r => r.status === "Pending").length,
                    reviewed: reports.filter(r => r.status === "Reviewed").length,
                    resolved: reports.filter(r => r.status === "Resolved").length,
                });

            });

    }, []);
    
    return (

        <div className="flex bg-slate-100 min-h-screen">

            <AdminSidebar />

            <main className="flex-1 p-8">

                <h1 className="text-4xl font-bold text-[#003366]">
                    Dashboard
                </h1>

                <p className="text-gray-600 mb-10">
                    Welcome back Administrator.
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    <DashboardCard
                        title="Announcements"
                        value={stats.announcements}
                        icon={<FaBullhorn />}
                        color="text-blue-700"
                    />

                    <DashboardCard
                        title="Pending Reports"
                        value={stats.pending}
                        icon={<FaExclamationCircle />}
                        color="text-red-600"
                    />

                    <DashboardCard
                        title="Resolved"
                        value={stats.resolved}
                        icon={<FaCheckCircle />}
                        color="text-green-600"
                    />
                </div>

            </main>

        </div>

    );

}

export default AdminDashboard;