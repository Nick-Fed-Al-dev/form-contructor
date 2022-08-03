import { IDynamicFillInputState, DynamicFillInputActionTypes, DynamicFillInputAction } from './../../types/redux/dynamic.fill.input';

export const initFill = (data : IDynamicFillInputState) : DynamicFillInputAction => {
  return {type: DynamicFillInputActionTypes.INIT, payload: data}
}

export const setAnswerTrue = (data : {
  questionNumber: number
  answerNumber: number
}) : DynamicFillInputAction => {
  return {type: DynamicFillInputActionTypes.SET_ANSWER_TRUE, payload: data}
}