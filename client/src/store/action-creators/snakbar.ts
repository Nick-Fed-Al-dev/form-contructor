import { AlertColor } from '@mui/material/Alert';
import { Dispatch } from 'react';
import { SnackbarAction, SnackbarActionTypes } from './../../types/redux/snackbar';

export const open = (text : string, type : AlertColor) : SnackbarAction => {
  return {type: SnackbarActionTypes.OPEN, payload: {text, type}}
}

export const close = () : SnackbarAction => {
  return {type: SnackbarActionTypes.CLOSE}
}

export const openClose = (text : string, type : AlertColor) : Function => {
  return (dispatch : Dispatch<SnackbarAction>) => {
    dispatch(open(text, type))
    setTimeout(() => {
      dispatch(close())
    }, 3000)
  }
}