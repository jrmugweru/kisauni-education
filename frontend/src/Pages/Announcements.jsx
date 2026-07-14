// import { useEffect, useState } from "react";
// import api from "../services/api";

// import Announcement from "../Components/home/Announcement";
// import Navbar from "../Components/layout/Navbar";
// import Footer from "../Components/layout/Footer";
// import { FaBullhorn, FaCalendarAlt } from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "../api/axios";

import Announcement from "../Components/home/Announcement";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";

import { FaBullhorn, FaCalendarAlt } from "react-icons/fa";

function Announcements() {

    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/announcements/")
            .then((response) => {
                setAnnouncements(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Announcement />
            <Navbar />

            <section className="bg-gray-100 min-h-screen py-12">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-12">
                        <FaBullhorn className="text-6xl text-blue-900 mx-auto mb-4" />

                        <h1 className="text-4xl font-bold text-[#003366]">
                            Announcements
                        </h1>

                        <p className="text-gray-600 mt-3 text-lg">
                            Stay updated with the latest announcements from the
                            Kisauni Sub-County Education Office.
                        </p>
                    </div>

                    {loading ? (
                        <div className="text-center text-lg text-gray-600">
                            Loading announcements...
                        </div>
                    ) : announcements.length === 0 ? (
                        <div className="bg-white p-10 rounded-xl shadow text-center">
                            <h2 className="text-2xl font-semibold text-gray-700">
                                No announcements available.
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Please check back later.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-8">

                            {announcements.map((announcement) => (
                                <div
                                    key={announcement.id}
                                    className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-900"
                                >
                                    <div className="flex flex-wrap justify-between items-center mb-4">

                                        <h2 className="text-2xl font-bold text-[#003366]">
                                            {announcement.title}
                                        </h2>

                                        <span className="bg-blue-100 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                                            Announcement
                                        </span>

                                    </div>

                                    <div className="flex items-center text-gray-500 mb-4">
                                        <FaCalendarAlt className="mr-2" />
                                        {new Date(announcement.created_at).toLocaleDateString()}
                                    </div>

                                    <p className="text-gray-700 leading-7">
                                        {announcement.message}
                                    </p>
                                </div>
                            ))}

                        </div>
                    )}

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Announcements;