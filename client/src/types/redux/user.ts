import { IUser } from './../IUser';
import { IError } from './../IError';

export interface IUserState {
  user?: IUser
  error?: IError,
  loading: boolean
}

export enum UserActionTypes {
  USER_REQUEST = 'USER_REQUEST',
  USER_LOGIN = 'USER_LOGIN',
  USER_REGISTER = 'USER_REGISTER',
  USER_LOGOUT = 'USER_LOGOUT',
  USER_REFRESH = 'USER_REFRESH',
  USER_ERROR = 'USER_ERROR'
}

interface IUserRequestAction {
  type: UserActionTypes.USER_REQUEST
}

interface IUserLoginAction {
  type: UserActionTypes.USER_LOGIN,
  payload: IUser
}

interface IUserRegisterAction {
  type: UserActionTypes.USER_REGISTER,
  payload: IUser
}

interface IUserLogoutAction {
  type: UserActionTypes.USER_LOGOUT,
}

interface IUserRefreshAction {
  type: UserActionTypes.USER_REFRESH,
  payload: IUser
}

interface IUserErrorAction {
  type: UserActionTypes.USER_ERROR,
  payload: IError
}

export type UserAction =
  IUserRequestAction |
  IUserLoginAction |
  IUserRegisterAction |
  IUserLogoutAction |
  IUserRefreshAction |
  IUserErrorAction
