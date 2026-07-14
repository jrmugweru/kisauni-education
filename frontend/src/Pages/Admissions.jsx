import Announcement from "../Components/home/Announcement";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import { FaBus, FaDownload, FaClipboardCheck } from "react-icons/fa";

function Admissions() {
  return (
    <>
      <Announcement />
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <FaBus className="text-6xl text-[#003366] mx-auto mb-4" />

          <h1 className="text-4xl font-bold text-[#003366]">
            Academic Trips & Educational Visits
          </h1>

          <p className="text-gray-600 mt-4 text-lg">
            Schools planning educational visits should follow the approval
            process outlined below before undertaking any trip.
          </p>
        </div>

        {/* Requirements */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <FaClipboardCheck className="text-3xl text-green-700" />
            <h2 className="text-2xl font-bold text-[#003366]">
              Requirements
            </h2>
          </div>

          <ul className="list-disc ml-6 space-y-3 text-gray-700">
            <li>Complete the Educational Visit Application Form.</li>
            <li>Attach the detailed trip itinerary ie VAlid driving licences for drivers and vehicle Insurance and PSV.</li>
            <li>Provide the list of learners(with assessment number/admission no) and accompanying teachers and parents.</li>
            <li>Bring with you three copies of the forms and attached documents to the SCDE.</li>
            <li>Ensure appropriate transport arrangements(Must be a school bus).</li>
            <li>The forms must be submitted two weeks before the travelling date.</li>
            <li>Submit the application to the Kisauni Sub-County Education Office for approval before the trip.</li>
          </ul>
        </div>

        {/* Download */}
        <div className="bg-blue-50 rounded-xl p-8 mb-10">

          <h2 className="text-2xl font-bold text-[#003366] mb-4">
            Download Application Form
          </h2>

          <p className="text-gray-700 mb-6">
            Download the official Educational Visit Application Form and
            submit the completed form to the Kisauni Sub-County Education
            Office.
          </p>

          <a
            href="/documents/Academic_Trip_Form.pdf"
            download
            className="inline-flex items-center gap-2 bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            <FaDownload />
            Download Academic Trip Form
          </a>

        </div>

        {/* Safety */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">

          <h2 className="text-2xl font-bold text-yellow-700 mb-4">
            Important Safety Guidelines
          </h2>

          <ul className="list-disc ml-6 space-y-3 text-gray-700">
            <li>Maintain adequate teacher-to-learner supervision.</li>
            <li>Carry a first aid kit during the trip.</li>
            <li>Ensure all learners are accounted for at every stage.</li>
            <li>Follow all Ministry of Education safety guidelines.</li>
            <li>Report any emergencies immediately to the relevant authorities.</li>
          </ul>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Admissions;