import { useState } from "react";
import { schools } from "../data/schools";
import Announcement from "../Components/home/Announcement";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";

function Schools() {
  const [category, setCategory] = useState("All");

  const filteredSchools =
    category === "All"
      ? schools
      : schools.filter(
          (school) => school.category.trim() === category.trim()
        );

  const categories = [
    "All",
    "Public Primary",
    "Private Primary",
    "Public JSS",
    "Private JSS",
    "Public Secondary",
    "Private Secondary",
  ];

  return (
    <>
      <Announcement />
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold text-[#003366] text-center">
          Schools in Kisauni Sub-County
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-8">
          Showing: <span className="font-bold text-blue-900">{category}</span>
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-5 py-2 rounded-lg font-medium transition ${
                category === item
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-blue-700 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* School Cards */}
        {filteredSchools.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchools.map((school) => (
              <div
                key={school.id}
                className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold text-[#003366]">
                  {school.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  {school.category}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold text-red-600">
              No schools found.
            </h2>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Schools;