import axios from "axios";

const $api = axios.create({
   withCredentials: true,
   baseURL: process.env.REACT_APP_API_URL
})

$api.interceptors.request.use((config) => {
   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
   return config
})

export {
   $api
}
/*const $host = axios.create({
   baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
   baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
   return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
   $host,
   $authHost
}*/
