function MapSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#003366]">
          Visit the Kisauni Sub-County Education Office
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-8">
          The Kisauni Sub-County Education Office is located within the
          Kisauni Deputy County Commissioner's Compound, Mombasa.
        </p>

        <div className="overflow-hidden rounded-xl shadow-lg">
          <iframe
            title="Kisauni Sub-County Education Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7960.182310748113!2d39.71425907564635!3d-4.00168117625279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18400dc7f199ab07%3A0x7f6e281d1b683f85!2sDeputy%20County%20Commissioner&#39;s%20Office%20-%20Kisauni!5e0!3m2!1sen!2sus!4v1783514422209!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://maps.google.com/?q=Deputy+County+Commissioner's+Office+Kisauni+Mombasa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            📍 Open in Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}

export default MapSection;