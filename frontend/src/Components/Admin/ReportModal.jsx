import { useState, useEffect } from "react";
import axios from "../../api/axios";

function ReportModal({
    open,
    onClose,
    report,
    refresh,
}) {

    const [status, setStatus] = useState("Pending");

    useEffect(() => {

        if (report) {
            setStatus(report.status);
        }

    }, [report]);

    if (!open || !report) return null;

    const updateStatus = async () => {

        try {

            await axios.patch(
                `/reports/${report.id}/`,
                {
                    status: status,
                }
            );

            refresh();

            onClose();

        } catch (err) {

            console.log(err);

            alert("Unable to update report.");

        }

    };

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-8">

                <h2 className="text-3xl font-bold text-[#003366] mb-8">
                    Report Details
                </h2>

                <div className="space-y-5">

                    <div>
                        <strong>Name:</strong>
                        <p>{report.name}</p>
                    </div>

                    <div>
                        <strong>Email:</strong>
                        <p>{report.email || "N/A"}</p>
                    </div>

                    <div>
                        <strong>Phone:</strong>
                        <p>{report.phone || "N/A"}</p>
                    </div>

                    <div>
                        <strong>School:</strong>
                        <p>{report.school}</p>
                    </div>

                    <div>
                        <strong>Category:</strong>
                        <p>{report.category}</p>
                    </div>

                    <div>
                        <strong>Description:</strong>

                        <div className="bg-slate-100 rounded-lg p-4 mt-2">
                            {report.description}
                        </div>

                    </div>

                    <div>

                        <strong>Status</strong>

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full border rounded-lg p-3 mt-2"
                        >

                            <option>Pending</option>
                            <option>Reviewed</option>
                            <option>Resolved</option>

                        </select>

                    </div>

                </div>

                <div className="flex justify-end gap-4 mt-8">

                    <button
                        onClick={onClose}
                        className="border px-6 py-3 rounded-lg"
                    >
                        Close
                    </button>

                    <button
                        onClick={updateStatus}
                        className="bg-blue-900 text-white px-6 py-3 rounded-lg"
                    >
                        Save Changes
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ReportModal;