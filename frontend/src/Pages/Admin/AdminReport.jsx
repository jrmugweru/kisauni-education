import { useEffect, useState } from "react";
import axios from "../../api/axios";

import AdminSidebar from "../../Components/Admin/Sidebar";
import ReportTable from "../../Components/Admin/ReportTable";
import ReportModal from "../../Components/Admin/ReportModal";

function ManageReports() {

    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedReport, setSelectedReport] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const fetchReports = () => {

        axios.get("/reports/")
            .then((res) => {
                setReports(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });

    };

    useEffect(() => {
        fetchReports();
    }, []);

    return (

        <div className="flex bg-slate-100 min-h-screen">

            <AdminSidebar />

            <main className="flex-1 p-8">

                <h1 className="text-4xl font-bold text-[#003366]">
                    Manage Reported Issues
                </h1>

                <p className="text-gray-600 mb-10">
                    Review reports submitted by parents and teachers.
                </p>

                <ReportTable
                    reports={reports}
                    loading={loading}
                    refresh={fetchReports}
                    onView={(report) => {
                        setSelectedReport(report);
                        setOpenModal(true);
                    }}
                />
                <ReportModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    report={selectedReport}
                    refresh={fetchReports}
                />

            </main>

        </div>

    );

}

export default ManageReports;