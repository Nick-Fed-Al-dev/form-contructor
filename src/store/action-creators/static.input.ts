import { StaticInputService } from './../../service/StaticInputService';
import { StaticInputAction, StaticInputActionTypes } from './../../types/redux/static.input';

export const setStaticValue = (data : {
  name : string
  value : string
}) : StaticInputAction => {
  return {type: StaticInputActionTypes.SET_VALUE, payload: data}
}

export const setStaticError = (data : {
  name : string
  value : string
}) : StaticInputAction | void => {

  switch(data.name){
    case 'firstName':
      return {type: StaticInputActionTypes.SET_ERROR, payload: {
        name : data.name,
        value: StaticInputService.validateFirstName(data.value)
      }}
    case 'secondName':
      return {type: StaticInputActionTypes.SET_ERROR, payload: {
        name : data.name,
        value: StaticInputService.validateSecondName(data.value)
      }}
    case 'lastName':
      return {type: StaticInputActionTypes.SET_ERROR, payload: {
        name : data.name,
        value: StaticInputService.validateLastName(data.value)
      }}
    case 'age':
      return {type: StaticInputActionTypes.SET_ERROR, payload: {
        name : data.name,
        value: StaticInputService.validateAge((data.value as unknown as number))
      }}
    case 'email':
      return {type: StaticInputActionTypes.SET_ERROR, payload: {
        name : data.name,
        value: StaticInputService.validateEmail(data.value)
      }}
    case 'password':  
      return {type: StaticInputActionTypes.SET_ERROR, payload: {
        name : data.name,
        value: StaticInputService.validatePassword(data.value)
      }}
  }

}