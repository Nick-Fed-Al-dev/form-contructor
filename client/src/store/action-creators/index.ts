import * as userActionCreator from './user'
import * as formActionCreator from './form'
import * as noteActionCreator from './note'
import * as staticInputActionCreator from './static.input'
import * as dynamicFillInputActionCreator from './dynamic.fill.input'
import * as dynamicFormationInputActionCreator from './dynamic.formation.input'
import * as snackbarActionCreator from './snakbar'

export const actionCreators = {
  ...userActionCreator,
  ...formActionCreator,
  ...staticInputActionCreator,
  ...dynamicFillInputActionCreator,
  ...dynamicFormationInputActionCreator,
  ...snackbarActionCreator,
  ...noteActionCreator
}