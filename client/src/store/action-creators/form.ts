import { IForm } from './../../types/IForm';
import { IError } from './../../types/IError';
import { FormService } from './../../service/FormService';
import { Dispatch } from 'react';
import { FormAction, FormActionTypes } from './../../types/redux/form';


export const checkForms = () : FormAction => {

  const forms = FormService.checkForms()

  if(forms?.length){
    return {type: FormActionTypes.FORMS_RECEIVED, payload: forms}
  }
  return {type: FormActionTypes.FORM_REQUEST}
}

export const getForms = (userId : string) : Function => {

  return async (dispatch: Dispatch<FormAction>) => {
    try {
      dispatch({type: FormActionTypes.FORM_REQUEST})
      const forms = await FormService.getForms(userId)
      dispatch({type: FormActionTypes.FORMS_RECEIVED, payload: forms})
    } catch (error : any) {
      dispatch({type: FormActionTypes.FORM_ERROR, payload: error})
    }
  }

}

export const createForm = (formData : IForm) : Function => {

  return async (dispatch: Dispatch<FormAction>) => {
    try {
      dispatch({type: FormActionTypes.FORM_REQUEST})
      const form = await FormService.createForm(formData)
      dispatch({type: FormActionTypes.FORM_CREATED, payload: form})
    } catch (error : any) {
      dispatch({type: FormActionTypes.FORM_ERROR, payload: error})
    }
  }
}

export const updateForm = (formId : string, form : IForm) : Function => {

  return async (dispatch: Dispatch<FormAction>) => {
    try {
      dispatch({type: FormActionTypes.FORM_REQUEST})
      const newForm = await FormService.updateForm(formId, form)
      dispatch({type: FormActionTypes.FORM_UPDATED, payload: newForm})
    } catch (error : any) {
      dispatch({type: FormActionTypes.FORM_ERROR, payload: error})
    }
  }
} 

export const removeForm = (formId : string) : Function => {

  return async (dispatch: Dispatch<FormAction>) => {
    try {
      dispatch({type: FormActionTypes.FORM_REQUEST})
      await FormService.removeForm(formId)
      dispatch({type: FormActionTypes.FORM_REMOVED, payload: formId})
    } catch (error : any) {
      dispatch({type: FormActionTypes.FORM_ERROR, payload: error})
    }
  }
}

export const getForm = (formId : string) : Function => {

  return async (dispatch: Dispatch<FormAction>) => {
    dispatch({type: FormActionTypes.FORM_REQUEST})
    const form = await FormService.getForm(formId)
    dispatch({type: FormActionTypes.FORM_RECEIVED, payload: form})
  }
}

export const formError = (error : IError) : FormAction =>{
  return {type: FormActionTypes.FORM_ERROR, payload: error}
}