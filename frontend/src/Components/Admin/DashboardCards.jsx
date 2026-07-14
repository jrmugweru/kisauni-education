function DashboardCard({
  icon,
  title,
  value,
  color,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className={`text-5xl ${color}`}>
          {icon}
        </div>

      </div>

    </div>
  );
}

export default DashboardCard;