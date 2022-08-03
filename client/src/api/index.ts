import axios, { AxiosError, AxiosRequestConfig } from "axios"
import { LCNames } from './../types/LCTypes';
import { LC } from './../service/LC';
import { IUser } from './../types/IUser';
import { ISuccessResponse } from './../types/ISuccessResponse';
import { IError } from '../types/IError';

export const baseURL : string = 'http://localhost:3333/api'

export const $api = axios.create({
  baseURL,
  withCredentials: true
})

$api.interceptors.request.use((config : AxiosRequestConfig) => {
  const user : IUser = LC.get(LCNames.user)
  if(user?.accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${user.accessToken}`
  }
  return config
})

$api.interceptors.response.use((config) => {
  return config
}, async (error : AxiosError) => {
  const config = error.config
  if((error.response?.data as IError).error.code === 401) {
    try {
      const response = await axios.post<ISuccessResponse<IUser>>(`${baseURL}/user/refresh`, null, {withCredentials: true})
      LC.set(LCNames.user, response.data.data)
      return $api.request(config)
    } catch (error: any){
      console.log(error)
      throw error.response.data
    }
  }
  throw error.response?.data
})