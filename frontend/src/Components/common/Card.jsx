import { Link } from "react-router-dom";

function Card({
  icon,
  title,
  description,
  buttonText,
  buttonColor,
  link,
}) {
  const isPdf = link.toLowerCase().endsWith(".pdf");

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col justify-between">

      <div className="text-center">

        <div className="text-6xl flex justify-center mb-6 text-blue-900">
          {icon}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {title}
        </h2>

        <p className="text-gray-600 leading-7">
          {description}
        </p>

      </div>

      {isPdf ? (
        <a
          href={link}
          download
          className={`${buttonColor} text-white text-center py-3 rounded-lg mt-8 font-semibold hover:opacity-90 transition`}
        >
          {buttonText}
        </a>
      ) : (
        <Link
          to={link}
          className={`${buttonColor} text-white text-center py-3 rounded-lg mt-8 font-semibold hover:opacity-90 transition`}
        >
          {buttonText}
        </Link>
      )}

    </div>
  );
}

export default Card;