import { IInput } from './../IInput';


export interface IStaticInputState{
  firstName: IInput
  secondName: IInput
  lastName: IInput
  age: IInput
  email: IInput
  password: IInput
  [key: string]: IInput
} 

export enum StaticInputActionTypes{
  SET_VALUE = 'SET_VALUE',
  SET_ERROR = 'SET_ERROR'
}

interface ISetAction{
  type: StaticInputActionTypes.SET_ERROR | StaticInputActionTypes.SET_VALUE
  payload: {
    name: string
    value: string
  }
}

export type StaticInputAction = ISetAction