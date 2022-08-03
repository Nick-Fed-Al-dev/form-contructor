import { IForm } from './../types/IForm'
import { INote } from '../types/INote'
import { IDynamicFillInputState } from './../types/redux/dynamic.fill.input'

export class DynamicFillInputService{
  static convertAnswersToNote(answers : IDynamicFillInputState, user : string) : INote{
    return {
      user,
      form: answers.formId,
      answers: answers.questions.map(question => ({
        questionNumber: question.number,
        answerNumber: question.answers.filter(answer => answer.answer)[0].number
      }))
    }
  }
  static validateAnswers(answers : IDynamicFillInputState) : IDynamicFillInputState{
    return {
      formId: answers.formId,
      questions: answers.questions.map(question => {
        if(!question.answers.filter(answer => {
          if(!answer.answer){
            return false
          } 
          return true
        })[0]){
          question.error = 'Question should have answer'
        }
        return question
      })
    }
  }
  static convertFormToFill(form : IForm) : IDynamicFillInputState{
    return {
      formId: (form.id as string),
      questions: form.questions.map(question => {
        return {
          number: question.number,
          error: '',
          answers: question.answers.map(answer => {
            return {
              number: answer.number,
              answer: false
            }
          })
        }
      })
    }
  }
}