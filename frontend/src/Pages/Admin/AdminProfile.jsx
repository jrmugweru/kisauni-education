import AdminSidebar from "../../Components/Admin/sidebar";

function AdminProfile() {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-[#003366] mb-8">
          My Profile
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">

          <div className="space-y-5">

            <div>
              <label className="block font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Administrator"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                defaultValue="admin@kisauni.go.ke"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg">
              Save Changes
            </button>

          </div>

        </div>

      </main>
    </div>
  );
}

export default AdminProfile;