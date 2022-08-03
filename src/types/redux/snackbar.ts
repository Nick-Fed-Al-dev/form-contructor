import { AlertColor } from '@mui/material/Alert';


export interface ISnackbarState{
  open: boolean
  text: string
  type: AlertColor
}

export enum SnackbarActionTypes{
  OPEN = 'OPEN',
  CLOSE = 'CLOSE'
}

interface IOpenAction{
  type: SnackbarActionTypes.OPEN
  payload: {
    text: string
    type: AlertColor
  }
}

interface ICloseAction{
  type: SnackbarActionTypes.CLOSE
}

export type SnackbarAction = IOpenAction | ICloseAction
