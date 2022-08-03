import { IDynamicFormationInputState, DynamicFormationInputAction, DynamicFormationInputActionTypes } from './../../types/redux/dynamic.formation.input';


const initialState : IDynamicFormationInputState = {
  formId: undefined,
  title: {
    value: 'New Quiz',
    error: ''
  },
  questions: [
    {
      number: 1,
      question: {
        error: '',
        value: 'Question 1'
      },
      answers: [
        {
          number: 1,
          answer: {
            error: '',
            value: 'Answer Variant 1'
          }
        },
        {
          number: 2,
          answer: {
            error: '',
            value: 'Answer Variant 2'
          }
        }
      ]
    }
  ]
}

export const dynamicFormationInputReducer = (state = initialState, action : DynamicFormationInputAction) 
    : IDynamicFormationInputState => {
  switch(action.type){
    case DynamicFormationInputActionTypes.SET_TITLE_VALUE:
      return {...state, title: {value: action.payload, error: ''}}
    case DynamicFormationInputActionTypes.SET_TITLE_ERROR:
      return {...state, title: {error: action.payload, value: state.title.value}}
    case DynamicFormationInputActionTypes.SET_QUESTION_VALUE:
      return {...state, questions: state.questions.map(question => {
        if(question.number === action.payload.questionNumber){
          question.question.value = action.payload.value
          question.question.error = ''
        }
        return question
      })}
    case DynamicFormationInputActionTypes.SET_QUESTION_ERROR:
      return {...state, questions: state.questions.map(question => {
        if(question.number === action.payload.questionNumber){
          question.question.error = action.payload.value
        }
        return question
      })}
    case DynamicFormationInputActionTypes.SET_FORMATION:
      return action.payload
    case DynamicFormationInputActionTypes.SET_ANSWER_VALUE:
      return {...state, questions: state.questions.map(question => {
        if(question.number === action.payload.questionNumber){
          question.answers.map(answer => {
            if(answer.number === action.payload.answerNumber){
              answer.answer.error = ''
              answer.answer.value = action.payload.value
            }
            return answer
          })
        }
        return question
      })}
    case DynamicFormationInputActionTypes.SET_ANSWER_ERROR:
      return {...state, questions: state.questions.map(question => {
        if(question.number === action.payload.questionNumber){
          question.answers.map(answer => {
            if(answer.number === action.payload.answerNumber){
              answer.answer.error = action.payload.value
            }
            return answer
          })
        }
        return question
      })}
    case DynamicFormationInputActionTypes.CREATE_QUESTION:
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            number: action.payload.questionNumber,
            question: {value: `Question ${state.questions.length + 1}`, error: ''},
            answers: [
              {number: 1, answer: {
                error: '',
                value: 'Answer Variant 1'
              }},
              {number: 2, answer: {
                error: '',
                value: 'Answer Variant 2'
              }}
            ]}
          ]
        }
    case DynamicFormationInputActionTypes.CREATE_ANSWER:
      return {...state, questions: state.questions.map(question => {
        if(question.number === action.payload.questionNumber){
          question.answers = [...question.answers, {number: action.payload.answerNumber, answer: 
            {value: `Answer Variant ${question.answers.length+1}`, error: ''}}]
            if(question.answers.length >= 2){
              question.question.error = ''
            }
        }
        return question
      })}
    case DynamicFormationInputActionTypes.CLEAR_FORMATION:
      return {formId: undefined, title: {value: 'Quiz Title', error: ''}, questions: [
        {
          number: 1,
          question: {
            error: '',
            value: 'Question 1'
          },
          answers: [
            {
              number: 1,
              answer: {
                error: '',
                value: 'Answer Variant 1'
              }
            },
            {
              number: 2,
              answer: {
                error: '',
                value: 'Answer Variant 2'
              }
            }
          ]
        }
      ]}
    case DynamicFormationInputActionTypes.REMOVE_QUESTION:
      return {...state, questions: state.questions
        .filter(question => !(question.number === action.payload.questionNumber))
        .map((question, index) => ({...question, number: index + 1}))
      }
    case DynamicFormationInputActionTypes.REMOVE_ANSWER:
      return {...state, questions: state.questions.map(question => {
        if(question.number === action.payload.questionNumber){
          question.answers = question.answers
            .filter(answer => !(answer.number === action.payload.answerNumber))
            .map((answer, index) => ({...answer, number: index + 1}))
        }
        if(question.answers.length < 2){
          question.question.error = 'Question has less then two answer variants'
        }
        return question
      })}   
    default:
      return state
  }
}

