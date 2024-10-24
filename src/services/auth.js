
import {apiClient} from "./config"

// const apiLogin = async (payload) => apiClient.post("/vendors/login")
// const apiSignUp = async (payload) => {
//     return await apiClient.post("/vendors/register", payload)
// }

// export default {apiSignUp, apiLogin}


export const apiSignUp = async (payload) => {
    return await apiClient.post("/vendors/register", payload)
}
export const apiGetProfile = async () => {
    return await apiClient.get("/vendors/me")
}

export const apiLogin = async (payload) =>{
  return await apiClient.post("/vendors/login", payload)
}

export const apiPostAd = async (adData) => {
  return await apiClient.post('/adverts', adData)
};

export const apiGetAd = async () => {
  const ads =  await apiClient.get('/adverts')
 
  return ads
};
export const apiGetAdDetail = async (id) => {
 return await apiClient.get(`/adverts/${id}`)
};
export const apiEditAdDetail = async (id) => {
 return await apiClient.get(`/adverts/${id}`)
};
export const apiDeleteAd = async (id) => {
 return await apiClient.get(`/adverts/${id}`)
};


// export const apiGetAdDetail = async () => {
//   const ads =  await apiClient.get(`/adverts/${id}`)
 
//   return ads
// };


// export const apiDeleteAd = async () => {
//   return await apiClient.get('/adverts')
// };

// export const apiPostAd = async (payload) => {
//   return await apiClient.post("/adverts", payload)
// }