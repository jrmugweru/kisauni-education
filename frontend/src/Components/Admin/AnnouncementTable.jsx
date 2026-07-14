import axios from "../../api/axios";
import { FaEdit, FaTrash } from "react-icons/fa";

function AnnouncementTable({
    announcements,
    loading,
    refresh,
    onEdit,
}) {

    const deleteAnnouncement = async (id) => {

        if (!window.confirm("Delete this announcement?"))
            return;

        try {

            await axios.delete(`/announcements/${id}/`);

            refresh();

        } catch (err) {

            console.error(err);

            alert("Unable to delete.");

        }

    };

    if (loading)
        return <p>Loading...</p>;

    return (

        <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="w-full">

                <thead className="bg-blue-900 text-white">

                    <tr>

                        <th className="p-4 text-left">
                            Title
                        </th>

                        <th className="p-4 text-left">
                            Date
                        </th>

                        <th className="p-4 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {announcements.map((announcement) => (

                        <tr
                            key={announcement.id}
                            className="border-b"
                        >

                            <td className="p-4">
                                {announcement.title}
                            </td>

                            <td className="p-4">
                                {new Date(
                                    announcement.created_at
                                ).toLocaleDateString()}
                            </td>

                            <td className="p-4">

                                <div className="flex justify-center gap-4">

                                    <button>

                                        <FaEdit
                                            className="text-blue-700"
                                        />

                                    </button>

                                    <button
                                        onClick={() => onEdit(announcement)}
                                    >
                                        <FaEdit className="text-blue-700" />
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default AnnouncementTable;