import axios from "../../api/axios";
import { FaEye, FaTrash } from "react-icons/fa";

function ReportTable({
    reports,
    loading,
    refresh,
    onView,
}) {

    const deleteReport = async (id) => {

        if (!window.confirm("Delete this report?"))
            return;

        try {

            await axios.delete(`/reports/${id}/`);

            refresh();

        } catch (err) {

            console.log(err);

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

                        <th className="p-4 text-left">Reporter</th>
                        <th className="p-4 text-left">School</th>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Status</th>
                        <th className="p-4 text-left">Date</th>
                        <th className="p-4 text-center">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {reports.map((report) => (

                        <tr
                            key={report.id}
                            className="border-b"
                        >

                            <td className="p-4">
                                {report.name}
                            </td>

                            <td className="p-4">
                                {report.school}
                            </td>


                            <td className="p-4">
                                {report.category}
                            </td>

                            <td className="p-4">
                                {report.status}
                            </td>

                            <td className="p-4">
                                {new Date(report.created_at).toLocaleDateString()}
                            </td>

                            <td className="p-4">

                                <div className="flex justify-center gap-4">

                                    <button
                                        onClick={() => onView(report)}
                                        className="text-blue-700 hover:text-blue-900"
                                    >
                                        <FaEye />
                                    </button>
                                    <button
                                        onClick={() =>
                                            deleteReport(report.id)
                                        }
                                    >

                                        <FaTrash className="text-red-600" />

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

export default ReportTable;