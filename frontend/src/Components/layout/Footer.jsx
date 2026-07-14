function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center">


        <p className="text-sm text-gray-400">
          © {year} Kisauni Education Management System. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;