import { IError } from './../../types/IError'
import { IUser } from './../../types/IUser'
import { AuthService } from './../../service/AuthService'
import { UserAction, UserActionTypes } from './../../types/redux/user'
import { Dispatch } from "react"

export const checkAuth = () : UserAction => {
  const user = AuthService.checkAuth()

  if(!user){
    return {type: UserActionTypes.USER_LOGOUT}
  }

  return {type: UserActionTypes.USER_LOGIN, payload: user}
  
}

export const login = (email : string, password : string) : Function => {

  return async (dispatch: Dispatch<UserAction>) : Promise<void> => {
    try {
      dispatch({type: UserActionTypes.USER_REQUEST})
      const user = await AuthService.login(email, password)
      dispatch({type: UserActionTypes.USER_LOGIN, payload: user})
    } catch (error : any) {
      dispatch({type: UserActionTypes.USER_ERROR, payload: error})
    }
  }
}

export const register = (userData : IUser) : Function => {

  return async (dispatch: Dispatch<UserAction>) : Promise<void> => {
    try {
      dispatch({type: UserActionTypes.USER_REQUEST})
      const user : IUser = await AuthService.register(userData)
      dispatch({type: UserActionTypes.USER_REGISTER, payload: user})
    } catch (error : any) {
      dispatch({type: UserActionTypes.USER_ERROR, payload: error})
    }
  }
}

export const refresh = () : Function => {
   
  return async (dispatch: Dispatch<UserAction>) : Promise<void> => {
    try {
      dispatch({type: UserActionTypes.USER_REQUEST})
      const user = await AuthService.refresh()
      dispatch({type: UserActionTypes.USER_REFRESH, payload: user})
    } catch (error : any) {
      dispatch({type: UserActionTypes.USER_ERROR, payload: error})
    }
  }
}

export const logout = () : Function => {

  return async (dispatch: Dispatch<UserAction>) : Promise<void> => {
    try {
      dispatch({type: UserActionTypes.USER_REQUEST})
      await AuthService.logout()
      dispatch({type: UserActionTypes.USER_LOGOUT})
    } catch (error : any) {
      dispatch({type: UserActionTypes.USER_ERROR, payload: error})
    }
  }
}

export const authError = (error: IError) : UserAction => {
  return {type: UserActionTypes.USER_ERROR, payload: error}
}