import { useEffect, useState } from "react";
import axios from "../../api/axios";

function AnnouncementModal({
    open,
    onClose,
    refresh,
    announcement,
}) {
    const [formData, setFormData] = useState({
        title: "",
        message: "",
    });

    useEffect(() => {
        if (announcement) {
            setFormData({
                title: announcement.title,
                message: announcement.message,
            });
        } else {
            setFormData({
                title: "",
                message: "",
            });
        }
    }, [announcement]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (announcement) {
                await axios.put(
                    `/announcements/${announcement.id}/`,
                    formData
                );
            } else {
                await axios.post(
                    "/announcements/",
                    formData
                );
            }

            refresh();
            onClose();

        } catch (err) {
            console.error(err);
            alert("Unable to save announcement.");
        }
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8">

                <h2 className="text-3xl font-bold text-[#003366] mb-6">
                    {announcement
                        ? "Edit Announcement"
                        : "New Announcement"}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    <div>

                        <label className="block mb-2 font-semibold">
                            Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-semibold">
                            Message
                        </label>

                        <textarea
                            rows="6"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    <div className="flex justify-end gap-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 rounded-lg border"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="bg-blue-900 text-white px-6 py-3 rounded-lg"
                        >
                            {announcement ? "Update" : "Publish"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default AnnouncementModal;