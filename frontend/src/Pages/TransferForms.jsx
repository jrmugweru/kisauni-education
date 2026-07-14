
import Announcement from "../Components/home/Announcement";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import { FaDownload, FaExchangeAlt } from "react-icons/fa";

function TransferForms() {
  return (
    <>
      <Announcement />
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <FaExchangeAlt className="text-6xl text-blue-900 mx-auto mb-4" />

          <h1 className="text-4xl font-bold text-[#003366]">
            School Transfer Forms
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Download the appropriate transfer form and follow the
            transfer procedure provided below.
          </p>
        </div>

        {/* Primary Transfer */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-10 border-l-4 border-green-700">

          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Primary School Transfer
          </h2>

          <ol className="list-decimal ml-6 space-y-3 text-gray-700">
            <li>Download the Primary School Transfer Form.</li>
            <li>Complete all required sections.</li>
            <li>Obtain approval from the current school.</li>
            <li>Submit the completed form to the receiving school.</li>
            <li>Present the form to the Kisauni Sub-County Education Office for verification where applicable.</li>
            <li>If the student is transfering from one county to another the documents also have to be approved by county director</li>
          </ol>

          <a
            href="/documents/Primary_Transfer_Form.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            <FaDownload />
            Download Primary Transfer Form
          </a>

        </div>

        {/* Secondary Transfer */}
        <div className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-red-700">

          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Secondary School Transfer
          </h2>

          <ol className="list-decimal ml-6 space-y-3 text-gray-700">
            <li>Download the Secondary/Senior School Transfer Form.</li>
            <li>Complete all required sections.</li>
            <li>Obtain approval from the current school Principal.</li>
            <li>Submit the completed form to the receiving school principal.</li>
            <li>Present the form to the Kisauni Sub-County Education Office for verification where applicable.</li>
            <li>If the student is transfering from one county to another the documents also have to be approved by county director</li>
          </ol>

          <a
            href="/documents/Secondary_Transfer_Form.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
          >
            <FaDownload />
            Download Secondary Transfer Form
          </a>

        </div>

        {/* Important Notice */}
        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-yellow-700 mb-3">
            Important Notice
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Ensure all information provided is accurate.</li>
            <li>Ensure that the realising school writes you the student assessment number and UPI number.</li>
            <li>Incomplete forms may delay processing.</li>
            <li>Keep a copy of the completed form for your records.</li>
          </ul>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default TransferForms;