export interface IForm{
  id?: string
  user: string
  title: string
  questions: {
    body: string
    number: number
    answers: {
      body: string
      number: number
    }[]
  }[]
}