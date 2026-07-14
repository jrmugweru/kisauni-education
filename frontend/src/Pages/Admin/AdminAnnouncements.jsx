import { useEffect, useState } from "react";
import axios from "../../api/axios";
import AdminSidebar from "../../Components/Admin/sidebar";
import AnnouncementTable from "../../Components/Admin/AnnouncementTable";
import AnnouncementModal from "../../Components/Admin/AnnouncementModal";

function AdminAnnouncements() {

    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

    const fetchAnnouncements = () => {
        axios.get("/announcements/")
            .then((res) => {
                setAnnouncements(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    return (

        <div className="flex bg-slate-100 min-h-screen">

            <AdminSidebar />

            <main className="flex-1 p-8">

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-4xl font-bold text-[#003366]">
                            Manage Announcements
                        </h1>

                        <p className="text-gray-600">
                            Create, edit and delete announcements.
                        </p>

                    </div>

                    <button
                        onClick={() => {
                            setSelectedAnnouncement(null);
                            setOpenModal(true);
                        }}
                        className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
                    >
                        + New Announcement
                    </button>

                </div>

                <AnnouncementTable
                    announcements={announcements}
                    loading={loading}
                    refresh={fetchAnnouncements}
                    onEdit={(announcement) => {
                        setSelectedAnnouncement(announcement);
                        setOpenModal(true);
                    }}
                />

            </main>
            <AnnouncementModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                refresh={fetchAnnouncements}
                announcement={selectedAnnouncement}
            />

        </div>

    );

}

export default AdminAnnouncements;