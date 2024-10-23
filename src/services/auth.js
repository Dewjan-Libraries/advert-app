
import {apiClient} from "./config"

// const apiLogin = async (payload) => apiClient.post("/vendors/login")
// const apiSignUp = async (payload) => {
//     return await apiClient.post("/vendors/register", payload)
// }

// export default {apiSignUp, apiLogin}


export const apiSignUp = async (payload) => {
    return await apiClient.post("/vendors/register", payload)
}

export const apiLogin = async (payload) =>{
  return await apiClient.post("/vendors/login", payload)
}