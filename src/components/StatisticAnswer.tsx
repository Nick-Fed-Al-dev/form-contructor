import { Box } from '@material-ui/core'
import { Typography } from '@mui/material'

interface p {
  answer: {
    body: string
    number: number
  }
  questionAnswers: {
    questionNumber: number
    answerNumber: number
  }[]
}

export const StatisticAnswer = (props : p) => {
  const people = props.questionAnswers.filter(answer => answer.answerNumber === props.answer.number).length
  const percent = props.questionAnswers.length ? 100 * people/props.questionAnswers.length : 0

  return (
    <Box display="flex" width="50%" alignItems="center" justifyContent="center" marginTop="20px">
      <Typography variant="h5">{props.answer.number}.</Typography>
      &nbsp;
      <Typography variant="h5">{percent}%({people} people)</Typography>
    </Box>
  )
}
