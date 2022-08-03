

export interface IDynamicFillInputState{
  formId: string
  questions: {
    number: number
    error: string
    answers: {
      number: number
      answer: boolean
    }[]
  }[]
}

export enum DynamicFillInputActionTypes{
  INIT = 'INIT',
  SET_ANSWER_TRUE = 'SET_ANSWER_TRUE'
}

interface IInitAction{
  type: DynamicFillInputActionTypes.INIT
  payload: IDynamicFillInputState
}

interface ISetAnswerTrueAction{
  type: DynamicFillInputActionTypes.SET_ANSWER_TRUE
  payload: {
    questionNumber: number
    answerNumber: number
  }
}

export type DynamicFillInputAction = 
  IInitAction |
  ISetAnswerTrueAction