
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { FaUserShield } from "react-icons/fa";

function AdminLogin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/accounts/login/", formData);

            // Save JWT tokens
            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);

            // Save logged in user
            localStorage.setItem("user", JSON.stringify(response.data.user));

            navigate("/admin-dashboard");
        } catch (err) {
            console.log(err);

            setError("Invalid email or password.");
        }
    };
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

                <div className="text-center mb-8">
                    <FaUserShield className="text-6xl text-[#003366] mx-auto mb-4" />

                    <h1 className="text-3xl font-bold text-[#003366]">
                        Administrator Login
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Kisauni Education Management System
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-900 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-900 outline-none"
                        />
                    </div>
                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded">
                            {error}
                        </div>
                    )}

                    <button
                        className="w-full bg-[#003366] text-white py-3 rounded-lg hover:bg-blue-900"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/admin-register"
                        className="text-blue-900 font-semibold"
                    >
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default AdminLogin;