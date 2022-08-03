import { IForm } from './../types/IForm';
import { LC } from './LC';
import { IDynamicFormationInputState } from './../types/redux/dynamic.formation.input'
import { LCNames } from '../types/LCTypes';

export class DynamicFormationInputService{
  static saveFormation(formation : IDynamicFormationInputState) : void{
    LC.set(LCNames.formation, formation)
  }
  static clearFormation() : void{
    LC.clear(LCNames.formation)
  }
  static convertFormationToForm(formation : IDynamicFormationInputState, user : string) : IForm{
    return {
      user,
      title: formation.title.value.toString(),
      questions: formation.questions.map(question => ({
        body: question.question.value.toString(),
        number: question.number,
        answers: question.answers.map(answer => ({
          number: answer.number,
          body: answer.answer.value.toString()
        }))
      }))
    }
  }
  static convertFormToFormation(form : IForm) : IDynamicFormationInputState{
    return {
      formId: form.id,
      title: {
        error: '',
        value: form.title
      },
      questions: form.questions.map(question => ({
        number: question.number,
        question: {
          error: '',
          value: question.body
        },
        answers: question.answers.map(answer => ({
          number: answer.number,
          answer: {
            error: '',
            value: answer.body
          }
        }))
      }))
    }
  }
  static validateFormation(formation : IDynamicFormationInputState) : boolean{
    let error = false
    if(formation.title.value === ''){
      error = true
    }
    formation.questions.forEach(question => {
      
      if(question.question.value === ''){
        error = true
      }
      if(question.answers.length < 2){
        error = true
      }
      question.answers.forEach(answer => {
        if(answer.answer.value === ''){
          error = true
        }
      })
    })
    return error
  }
  
}