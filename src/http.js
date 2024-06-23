import axios from "axios";
export default axios.create({
    baseURL: "http://admin.bizzata.in/api/",
    headers: {
        "Content-type": "application/json"
    }
})