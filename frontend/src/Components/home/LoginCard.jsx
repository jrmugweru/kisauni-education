import Card from "../common/Card";
import { FaFilePdf } from "react-icons/fa";

import {
  FaSchool,
  FaExchangeAlt,
  FaClipboardList,
  FaBullhorn,
  FaExclamationCircle,
  FaPhoneAlt,
} from "react-icons/fa";

function QuickServices() {
  return (
    <section
      id="services"
      className="bg-slate-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-blue-900">
            Quick Services
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Access education services and important information with a single click.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          <Card
            icon={<FaSchool />}
            title="Schools"
            description="Browse all public and private schools within Kisauni Sub-County."
            buttonText="View Schools"
            buttonColor="bg-blue-900"
            link="/schools"
          />

          <Card
            icon={<FaExchangeAlt />}
            title="Transfer Forms"
            description="Download school transfer forms and view the transfer application process."
            buttonText="Open"
            buttonColor="bg-green-700"
            link="/transfer-forms"
          />

          <Card
            icon={<FaClipboardList />}
            title="Admissions & Educational Visits"
            description="View school registration requirements, educational trip guidelines and download relevant documents."
            buttonText="Learn More"
            buttonColor="bg-yellow-500"
            link="/admissions"
          />

          <Card
            icon={<FaBullhorn />}
            title="Announcements"
            description="Read the latest announcements and notices from the Kisauni Sub-County Education Office."
            buttonText="View Announcements"
            buttonColor="bg-indigo-700"
            link="/announcements"
          />

          <Card
            icon={<FaExclamationCircle />}
            title="Report an Issue"
            description="Submit complaints, suggestions or report issues affecting schools within Kisauni."
            buttonText="Submit Report"
            buttonColor="bg-red-600"
            link="/report-issue"
          />

          <Card
  icon={<FaFilePdf />}
  title="School Registration Requirements"
  description="Download the official requirements and guidelines for registering a public or private school in Kisauni Sub-County."
  buttonText="Download PDF"
  buttonColor="bg-red-700"
  link="/documents/School_Registration_Requirements.pdf"
/>
        </div>

      </div>
    </section>
  );
}

export default QuickServices;