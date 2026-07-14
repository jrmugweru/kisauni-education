// import axios from "axios";

// export default axios.create({
//   baseURL: "http://127.0.0.1:8000/api",
// });
import axios from "axios";

export default axios.create({
    baseURL: "https://kisauni-education-1.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});