import { snackbarReducer } from './snackbar.reducer';
import { dynamicFillInputReducer } from './dynamic.fill.input.reducer';
import { dynamicFormationInputReducer } from './dynamic.formation.input.reducer';
import {combineReducers} from 'redux'
import { formReducer } from './form.reducer'
import { staticInputReducer } from './static.input.reducer'
import { noteReducer } from './note.reducer'
import { userReducer } from './user.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  form: formReducer,
  note: noteReducer,
  staticInput: staticInputReducer,
  dynamicFormationInput: dynamicFormationInputReducer,
  dynamicFillInput: dynamicFillInputReducer,
  snackbar: snackbarReducer
})

export type RootState = ReturnType<typeof rootReducer>