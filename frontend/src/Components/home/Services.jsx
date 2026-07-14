import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaClock,
} from "react-icons/fa";

function Services() {
  return (
    <section
      id="contact"
      className="bg-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#003366]">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Need assistance? Reach out to the Kisauni Sub-County Education Office.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold text-[#003366] mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">0745 093 883</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">
                    deokisauni@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaBuilding className="text-2xl text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    Kisauni Sub-County Education Office
                  </h4>
                  <p className="text-gray-600">
                    P.O. Box 10651, Bamburi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-semibold">
                    County Education Office
                  </h4>
                  <p className="text-gray-600">
                    P.O. Box 90204, Mombasa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-2xl text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-semibold">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday
                  </p>
                  <p className="text-gray-600">
                    8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Office Message */}
          <div className="bg-[#003366] text-white p-10 rounded-2xl shadow-lg flex flex-col justify-center">

            <h3 className="text-3xl font-bold mb-6">
              We're Here to Help
            </h3>

            <p className="leading-8 text-gray-200">
              The Kisauni Education Management System is designed to provide
              easy access to school information, transfer procedures,
              registration requirements, announcements, and a convenient way
              to report education-related issues within Kisauni Sub-County.
            </p>

            <div className="mt-8">
              <a
                href="tel:0745093883"
                className="inline-block bg-yellow-400 text-[#003366] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Call Us
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;