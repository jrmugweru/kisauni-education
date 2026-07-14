import { Link } from "react-router-dom";
import heroImage from "../../assets/images/123.png";

function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Kisauni Education
          <br />
          Management System
        </h1>

        <p className="mt-6 max-w-3xl text-lg md:text-2xl text-gray-200">
          A centralized digital platform connecting parents,
          schools, and the Kisauni Sub-County Education Office
          for efficient education services.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <a
            href="#portals"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300"
          >
            Get Started
          </a>

          <Link
            to="/parent-register"
            className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300"
          >
            Register
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;