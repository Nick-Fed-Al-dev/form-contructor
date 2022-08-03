import { AxiosResponse } from 'axios';
import { $api } from "../api";
import { IForm } from "../types/IForm";
import { ISuccessResponse } from '../types/ISuccessResponse';
import { LCNames } from "../types/LCTypes";
import { LC } from "./LC";

export class FormService{

  static checkForms() : IForm[]{
    const forms = LC.get<IForm[]>(LCNames.form)
    return forms
  }

  static async getForms(userId : string) : Promise<IForm[]>{
    const response : AxiosResponse<ISuccessResponse<IForm[]>> = await $api.get('/form')
    const forms = response.data.data.filter(form => form.user === userId)
    LC.set(LCNames.form, forms)
    return forms
  }

  static async getForm(formId : string) : Promise<IForm>{
    const response : AxiosResponse<ISuccessResponse<IForm>> = await $api.get(`/form/${formId}`)
    return response.data.data
  }

  static async createForm(formData : IForm) : Promise<IForm>{
    const response : AxiosResponse<ISuccessResponse<IForm>> = await $api.post('/form', formData)
    const form = response.data.data
    const forms = LC.get<IForm[]>(LCNames.form)
    LC.set(LCNames.form, [...forms, form])
    LC.clear(LCNames.formation)
    return form
  }

  static async updateForm(id : string, formData : IForm) : Promise<IForm>{
    const response : AxiosResponse<ISuccessResponse<IForm>> = await $api.put(`/form/${id}`, formData)
    const newForm = response.data.data
    const forms = LC.get<IForm[]>(LCNames.form)
    LC.set(LCNames.form, forms.map(form => {
      if(form.id === newForm.id){
        return newForm
      }
      return form
    }))
    LC.clear(LCNames.formation)
    return newForm
  }

  static async removeForm(id : string) : Promise<void>{
    await $api.delete(`/form/${id}`)
    const forms = LC.get<IForm[]>(LCNames.form)
    LC.set(LCNames.form, forms.filter(form => form.id !== id))
  }  
}