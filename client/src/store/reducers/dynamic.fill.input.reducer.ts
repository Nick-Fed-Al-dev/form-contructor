import { IDynamicFillInputState, DynamicFillInputAction, DynamicFillInputActionTypes } from './../../types/redux/dynamic.fill.input';


const initialState : IDynamicFillInputState = {
  formId: '',
  questions: []
}

export const dynamicFillInputReducer = (state = initialState, action : DynamicFillInputAction) : IDynamicFillInputState => {
  switch(action.type){
    case DynamicFillInputActionTypes.INIT:
      return action.payload
    case DynamicFillInputActionTypes.SET_ANSWER_TRUE:
      return {...state, questions: state.questions.map(question => {
        if(action.payload.questionNumber === question.number){
          question.error = ''
          question.answers.map(answer => {
            if(answer.number === action.payload.answerNumber){
              answer.answer = true
            } else{
              answer.answer = false
            }
            return answer
          })
        }
        return question
      })}   
    default:
      return state
  }
}