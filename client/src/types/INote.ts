export interface INote{
  id?: string
  user: string
  form: string
  answers: {
    questionNumber: number
    answerNumber: number
  }[]
}