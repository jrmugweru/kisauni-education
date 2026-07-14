import { useState } from "react";
import Announcement from "../Components/home/Announcement";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import { FaExclamationTriangle } from "react-icons/fa";
import axios from "../api/axios";

function ReportIssue() {
  const [formData, setFormData] = useState({
  name: "",
  role: "",
  phone: "",
  email: "",
  school: "",
  subject: "",
  description: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/reports/", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        school: formData.school,

        // Your model expects "category", not "role" or "subject"
        category: formData.subject,

        description: formData.description,
      });

      alert("Your report has been submitted successfully.");

      setFormData({
        name: "",
        role: "",
        phone: "",
        email: "",
        school: "",
        subject: "",
        description: "",
      });

    } catch (error) {
      console.error(error);

      alert("Unable to submit report.");
    }
  };




  return (
    <>
      <Announcement />
      <Navbar />

      <section className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

          <div className="text-center mb-8">
            <FaExclamationTriangle className="text-5xl text-red-600 mx-auto mb-4" />

            <h1 className="text-4xl font-bold text-[#003366]">
              Report an Issue
            </h1>

            <p className="text-gray-600 mt-3">
              Parents, guardians, teachers and members of the public can use
              this form to report education-related concerns within Kisauni
              Sub-County.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block font-semibold mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  You Are
                </label>

                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3"
                >
                  <option value="">Select</option>
                  <option>Parent/Guardian</option>
                  <option>Teacher</option>
                  <option>Student</option>
                  <option>Member of the Public</option>
                </select>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block font-semibold mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                />
              </div>

            </div>

            <div>
              <label className="block font-semibold mb-2">
                School Name
              </label>

              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="Enter the school involved (if applicable)"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <label className="block font-semibold mb-2">
              Category
            </label>

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            >
              <option value="">Select Category</option>
              <option value="Complaint">Complaint</option>
              <option value="Suggestion">Suggestion</option>
              <option value="School Issue">School Issue</option>
              <option value="Teacher Issue">Teacher Issue</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Other">Other</option>
            </select>

            <div>
              <label className="block font-semibold mb-2">
                Describe the Issue
              </label>

              <textarea
                name="description"
                rows="6"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3"
                placeholder="Provide as much information as possible..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#003366] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Submit Report
            </button>

          </form>

          <div className="mt-10 bg-blue-50 border-l-4 border-blue-700 p-5 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">
              Confidentiality
            </h3>

            <p className="text-gray-700">
              All reports submitted through this portal are treated
              confidentially and will only be accessed by authorized officers
              at the Kisauni Sub-County Education Office.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default ReportIssue;