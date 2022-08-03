import { FormAction, FormActionTypes, IFormState } from "../../types/redux/form";


const initialState : IFormState = {
  forms: [],
  error: undefined,
  loading: false,
  form: undefined
}

export const formReducer = (state = initialState, action : FormAction) : IFormState => {
  switch (action.type) {
    case FormActionTypes.FORM_REQUEST:
      return {...state, loading: true}
    case FormActionTypes.FORMS_RECEIVED:
      return {...state, loading: false, forms: action.payload}  
    case FormActionTypes.FORM_CREATED:
      return {...state, loading: false, forms: [...state.forms, action.payload]}  
    case FormActionTypes.FORM_UPDATED:
      return {...state, loading: false, forms: state.forms.map(form => {
        if(form.id === action.payload.id){
          return action.payload
        }
        return form
      })}
    case FormActionTypes.FORM_REMOVED:
      return {...state, loading: false, forms: state.forms.filter(form => !(form.id === action.payload))}  
    case FormActionTypes.FORM_ERROR:
      return {...state, loading: false, error: action.payload}
    case FormActionTypes.FORM_RECEIVED:
      return {...state, loading: false, form: action.payload}    
    default:
      return state
  }
}