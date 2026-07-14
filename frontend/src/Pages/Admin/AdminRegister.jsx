import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

function AdminRegister() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">

        <div className="text-center mb-8">
          <FaUserShield className="text-6xl text-[#003366] mx-auto mb-4" />

          <h1 className="text-3xl font-bold text-[#003366]">
            Admin Registration
          </h1>

          <p className="text-gray-500">
            Create an administrator account
          </p>
        </div>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg p-3"
          />

          <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800">
            Register
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/admin-login"
            className="text-blue-900 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default AdminRegister;