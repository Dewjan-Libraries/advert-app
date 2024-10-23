import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const token = localStorage.getItem("token") // to acces token from local storage

 //to set token on headers however put it in an if so that 
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const apiClient = axios.create({
    baseURL: baseURL,
})
