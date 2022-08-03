import { IInput } from './../IInput';


export interface IDynamicFormationInputState{
  formId?: string
  title: IInput
  questions: {
    number: number
    question: IInput
    answers: {
      number: number
      answer: IInput
    }[]
  }[]
}

export enum DynamicFormationInputActionTypes{
  SET_FORMATION = 'SET_FORMATION',
  SET_TITLE_VALUE = 'SET_TITLE_VALUE',
  SET_TITLE_ERROR = 'SET_TITLE_ERROR',
  SET_QUESTION_VALUE = 'SET_QUESTION_VALUE',
  SET_QUESTION_ERROR = 'SET_QUESTION_ERROR',
  SET_ANSWER_VALUE = 'SET_ANSWER_VALUE',
  SET_ANSWER_ERROR = 'SET_ANSWER_ERROR',
  CREATE_QUESTION = 'CREATE_QUESTION',
  CREATE_ANSWER = 'CREATE_ANSWER',
  CLEAR_FORMATION = 'CLEAR_FORMATION',
  REMOVE_QUESTION = 'REMOVE_QUESTION',
  REMOVE_ANSWER = 'REMOVE_ANSWER'
}

interface ISetFormationAction{
  type: DynamicFormationInputActionTypes.SET_FORMATION
  payload: IDynamicFormationInputState
}

interface ISetTitleAction{
  type: DynamicFormationInputActionTypes.SET_TITLE_VALUE | DynamicFormationInputActionTypes.SET_TITLE_ERROR
  payload: string
}

interface ISetQuestionAction{
  type: DynamicFormationInputActionTypes.SET_QUESTION_VALUE | DynamicFormationInputActionTypes.SET_QUESTION_ERROR
  payload: {
    questionNumber: number
    value: string
  }
}

interface ISetAnswerAction{
  type: DynamicFormationInputActionTypes.SET_ANSWER_VALUE | DynamicFormationInputActionTypes.SET_ANSWER_ERROR
  payload: {
    questionNumber: number
    answerNumber: number
    value: string
  }
}

interface ICreateQuestionAction{
  type: DynamicFormationInputActionTypes.CREATE_QUESTION | DynamicFormationInputActionTypes.REMOVE_QUESTION
  payload: {
    questionNumber: number
  }
}

interface ICreateAnswerAction{
  type: DynamicFormationInputActionTypes.CREATE_ANSWER | DynamicFormationInputActionTypes.REMOVE_ANSWER
  payload: {
    questionNumber: number
    answerNumber: number
  }
}

interface IClearFormationAction{
  type: DynamicFormationInputActionTypes.CLEAR_FORMATION
}

export type DynamicFormationInputAction = 
  ISetFormationAction |
  ISetTitleAction |
  ISetTitleAction |
  ISetQuestionAction |
  ISetQuestionAction |
  ISetAnswerAction |
  ISetAnswerAction |
  ICreateQuestionAction |
  ICreateAnswerAction |
  IClearFormationAction