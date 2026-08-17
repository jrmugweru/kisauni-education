import { useState } from "react";
import { schools } from "../data/schools";
import Announcement from "../Components/home/Announcement";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import SEO from "../Components/SEO";

function Schools() {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSchools = schools.filter((school) => {
    // Category filter
    const matchesCategory =
      category === "All" ||
      school.category.trim() === category.trim();

    // Search filter
    const matchesSearch = school.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });

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
      <SEO
        title="Schools in Kisauni | Kisauni Education Office"
        description="Find information about schools in Kisauni Sub-County, including public and private primary, secondary and junior secondary schools."
      />

      <Announcement />
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-[#003366] text-center">
          Schools in Kisauni Sub-County
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-8">
          Find a school by name or select a category below.
        </p>

        {/* SEARCH BOX */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">

            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Search for a school..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-gray-800"
            />

            {/* Clear Button */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-600"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

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

        {/* Showing Results */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-bold text-blue-900">
              {filteredSchools.length}
            </span>{" "}
            school{filteredSchools.length !== 1 ? "s" : ""}
          </p>

          {searchTerm && (
            <p className="text-sm text-gray-500 mt-1">
              Search results for:{" "}
              <span className="font-semibold">
                "{searchTerm}"
              </span>
            </p>
          )}
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
            <div className="text-5xl mb-4">🔍</div>

            <h2 className="text-xl font-semibold text-red-600">
              No schools found.
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching using a different school name.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setCategory("All");
              }}
              className="mt-5 px-5 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
            >
              Show All Schools
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Schools;