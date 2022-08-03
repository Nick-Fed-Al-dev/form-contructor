import { IDynamicFormationInputState, DynamicFormationInputAction, DynamicFormationInputActionTypes } from './../../types/redux/dynamic.formation.input';


export const setFormation = (formation : IDynamicFormationInputState) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.SET_FORMATION, payload: formation}
}

export const setTitleValue = (value : string) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.SET_TITLE_VALUE, payload: value}
}

export const setTitleError = (value : string) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.SET_TITLE_ERROR, payload: value}
}

export const setQuestionValue = (data : {
  questionNumber : number
  value : string
}) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.SET_QUESTION_VALUE, payload: data}
}

export const setQuestionError = (data : {
  questionNumber : number
  value : string
}) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.SET_QUESTION_ERROR, payload: data}
}

export const setAnswerValue = (data : {
  questionNumber: number
  answerNumber: number
  value: string
}) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.SET_ANSWER_VALUE, payload: data}
}

export const setAnswerError = (data : {
  questionNumber: number
  answerNumber: number
  value: string
}) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.SET_ANSWER_ERROR, payload: data}
}

export const createQuestion = (data : {
  questionNumber : number
}) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.CREATE_QUESTION, payload: data}
}

export const removeQuestion = (data : {
  questionNumber : number
}) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.REMOVE_QUESTION, payload: data}
}

export const createAnswer = (data : {
  questionNumber: number
  answerNumber: number
}) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.CREATE_ANSWER, payload: data}
}

export const removeAnswer = (data : {
  questionNumber: number
  answerNumber: number
}) : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.REMOVE_ANSWER, payload: data}
}

export const clearFormation = () : DynamicFormationInputAction => {
  return {type: DynamicFormationInputActionTypes.CLEAR_FORMATION}
}