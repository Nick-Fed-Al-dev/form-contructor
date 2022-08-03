import { IError } from "../IError";
import { IForm } from "../IForm";

export interface IFormState{
  forms: IForm[] | []
  error?: IError
  loading: boolean
  form?: IForm
}

export enum FormActionTypes{
  FORM_REQUEST = 'FORM_REQUEST',
  FORMS_RECEIVED = 'FORMS_RECEIVED',
  FORM_CREATED = 'FORM_CREATED',
  FORM_UPDATED = 'FORM_UPDATED',
  FORM_REMOVED = 'FORM_REMOVED',
  FORM_ERROR = 'FORM_ERROR',
  FORM_RECEIVED = "FORM_RECEIVED"
}

interface IFormRequestAction{
  type: FormActionTypes.FORM_REQUEST
}

interface IFormsReceivedAction{
  type: FormActionTypes.FORMS_RECEIVED
  payload: IForm[]
}

interface IFormCreatedAction{
  type: FormActionTypes.FORM_CREATED
  payload: IForm
}

interface IFormReceived{
  type: FormActionTypes.FORM_RECEIVED
  payload: IForm
}

interface IFormUpdatedAction{
  type: FormActionTypes.FORM_UPDATED
  payload: IForm
}

interface IFormRemovedAction{
  type: FormActionTypes.FORM_REMOVED
  payload: string
}

interface IFormErrorAction{
  type: FormActionTypes.FORM_ERROR
  payload: IError
}

export type FormAction = 
  IFormRequestAction |
  IFormsReceivedAction |
  IFormCreatedAction |
  IFormUpdatedAction |
  IFormRemovedAction |
  IFormErrorAction | 
  IFormReceived