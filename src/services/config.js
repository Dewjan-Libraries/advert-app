import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
});

// Set token in headers on each request
apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

export { apiClient };




















// import axios from "axios";

// const baseURL = import.meta.env.VITE_BASE_URL;

// const token = localStorage.getItem("token") // to acces token from local storage

//  //to set token on headers however put it in an if so that 
// if (token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
// }

// export const apiClient = axios.create({
//     baseURL: baseURL,
// })

