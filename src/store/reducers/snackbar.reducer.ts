import { ISnackbarState, SnackbarAction, SnackbarActionTypes } from '../../types/redux/snackbar';


const initialState : ISnackbarState = {
  open: false,
  text: '',
  type: 'info'
}

export const snackbarReducer = (state = initialState, action : SnackbarAction) : ISnackbarState => {
  switch(action.type){
    case SnackbarActionTypes.OPEN:
      return {open: true, text: action.payload.text, type: action.payload.type}
    case SnackbarActionTypes.CLOSE:
      return {open: false, text: '', type: 'info'}  
    default:
      return state  
  }
}