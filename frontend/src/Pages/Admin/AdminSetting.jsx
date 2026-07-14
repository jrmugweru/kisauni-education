import { useState } from "react";
import AdminSidebar from "../../Components/Admin/Sidebar";
import axios from "../../api/axios";

function AdminSettings() {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
     console.log("Change password clicked");

    setMessage("");
    setError("");

    if (formData.new_password !== formData.confirm_password) {
      setError("New passwords do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("access");

      await axios.post(
        "/accounts/change-password/",
        {
          current_password: formData.current_password,
          new_password: formData.new_password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Password updated successfully.");

      setFormData({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });
    } catch (err) {
      console.error(err);
      setError("Unable to update password.");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100">

      <AdminSidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-[#003366] mb-8">
          Settings
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">

          <h2 className="text-2xl font-semibold mb-6">
            Change Password
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="password"
              name="current_password"
              placeholder="Current Password"
              value={formData.current_password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="password"
              name="new_password"
              placeholder="New Password"
              value={formData.new_password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            {message && (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg">
                {message}
              </div>
            )}

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
            >
              Update Password
            </button>

          </form>

        </div>

      </main>

    </div>
  );
}

export default AdminSettings;