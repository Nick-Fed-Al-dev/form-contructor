import { LCNames } from './../types/LCTypes'
import { LC } from './LC'
import { ISuccessResponse } from './../types/ISuccessResponse'
import { AxiosResponse } from "axios"
import { $api } from "../api"
import { IUser } from "../types/IUser"


export class AuthService {

  static checkAuth() : IUser {
    const user = LC.get<IUser>(LCNames.user)
    return user
  }

  static async login(email : string, password : string) : Promise<IUser> {
    const response : AxiosResponse<ISuccessResponse<IUser>> = 
      await $api.post('/user/login', {email, password})
    const user : IUser = response?.data?.data

    if(user?.id){
      LC.set(LCNames.user, user)
    }
    return user

  }

  static async register(userData : IUser) : Promise<IUser> {
    const response : AxiosResponse<ISuccessResponse<IUser>> = 
      await $api.post('/user/register', userData) 
    const user = response?.data?.data
    if(user?.id){
      LC.set(LCNames.user, user)
    }
    return user
  }

  static async refresh() : Promise<IUser> {
    const response : AxiosResponse<ISuccessResponse<IUser>> = await $api.post('/user/refresh')
    const user = response?.data?.data
    if(user?.id){
      LC.set(LCNames.user, user)
    }
    return user
  }

  static async logout() : Promise<void> {
    await $api.post('/user/logout')
    LC.clear(LCNames.user)
  }
}