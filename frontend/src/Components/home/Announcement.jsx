import { useEffect, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
import axios from "../../api/axios";

function Announcement() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await axios.get("/announcements/");
      setAnnouncements(res.data);
    } catch (err) {
      console.error("Failed to load announcements", err);
    }
  };

  return (
    <div className="bg-yellow-400 text-blue-900 py-2">
      <div className="max-w-7xl mx-auto flex items-center gap-3 px-6">

        <FaBullhorn className="text-lg" />

        <marquee
          behavior="scroll"
          direction="left"
          className="font-semibold"
        >
          {announcements.length > 0
            ? announcements.map(a => a.title).join(" • ")
            : "No announcements available."}
        </marquee>

      </div>
    </div>
  );
}

export default Announcement;