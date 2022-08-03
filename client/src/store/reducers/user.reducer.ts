import { UserAction, IUserState, UserActionTypes } from './../../types/redux/user';

const initialState: IUserState = {
  user: undefined,
  error: undefined,
  loading: false
}

export const userReducer = (state = initialState, action: UserAction) : IUserState => {
  
  switch (action.type){
    case UserActionTypes.USER_LOGIN:
      return {...state, loading: false, user: action.payload}
    case UserActionTypes.USER_LOGOUT:
      return {...state, loading: false, user: undefined}
    case UserActionTypes.USER_REFRESH:
      return {...state, loading: false, user: action.payload}
    case UserActionTypes.USER_REGISTER:
      return {...state, loading: false, user: action.payload}
    case UserActionTypes.USER_REQUEST:
      return {...state, loading: true}
    case UserActionTypes.USER_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}