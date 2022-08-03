import { Box, Typography } from '@material-ui/core'
import { INote } from '../types/INote'
import { StatisticAnswer } from './StatisticAnswer'

interface p {
  question: {
    body: string
    number: number
    answers: {
      body: string
      number: number
    }[]
  },
  notes: INote[]
}

export const StatisticQuestion = (props : p) => {

  const answers = props.question.answers.map((answer, index) => {
    const arrOfAnswers = props.notes.map(note => note.answers)
    let allAnswers: {
      questionNumber: number
      answerNumber: number
    }[] = []
    arrOfAnswers.forEach(answer => {
      allAnswers = [...allAnswers, ...answer]
    })
    const questionAnswers = allAnswers.filter((answer, index) => answer.questionNumber === props.question.number)
    return (
      <StatisticAnswer questionAnswers={questionAnswers} key={index} answer={answer} />
    )
    
  })

  return (
    <Box marginTop="40px">
      <Box display="flex">
        <Typography variant="h3">{props.question.number}.</Typography>
        &nbsp;
        <Typography variant="h3">{props.question.body}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap">
        {answers}
      </Box>
    </Box>
  )
}
