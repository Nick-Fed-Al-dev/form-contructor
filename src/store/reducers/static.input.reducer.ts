import { IStaticInputState, StaticInputAction, StaticInputActionTypes } from './../../types/redux/static.input';

const initialState : IStaticInputState = {

  firstName: {
    value: '',
    error: ''
  },

  secondName: {
    value: '',
    error: ''
  },

  lastName: {
    value: '',
    error: ''
  },

  age: {
    value: '',
    error: ''
  },

  email: {
    value: '',
    error: ''
  },

  password: {
    value: '',
    error: ''
  }

}

export const staticInputReducer = (state = initialState, action : StaticInputAction) : IStaticInputState => {
  switch(action.type){
    case StaticInputActionTypes.SET_VALUE:
      return {...state, [action.payload.name]: {error: '', value: action.payload.value}}
    case StaticInputActionTypes.SET_ERROR:
      return {...state, [action.payload.name]: {error: action.payload.value, value: state[action.payload.name].value}}  
    default:
      return state
  }
}