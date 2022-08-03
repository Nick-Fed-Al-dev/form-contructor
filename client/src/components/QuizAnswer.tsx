import { Box, Radio } from '@material-ui/core'
import { Typography } from '@mui/material'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface p {
  answer: {
    body: string
    number: number
  },
  questionNumber: number  
}

export const QuizAnswer = (props : p) => {
  const { dynamicFillInput } = useTypedSelector(store => store)
  const {setAnswerTrue} = useActions()

  const answer = 
    dynamicFillInput
    .questions
    .find(question => question.number === props.questionNumber)
    ?.answers
    .find(answer => answer.number === props.answer.number)

  const onClick = () => {
    setAnswerTrue({
      questionNumber: props.questionNumber,
      answerNumber: props.answer.number
    })
  }

  return (
    <Box 
      width="50%"
      marginTop="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Radio
        color="primary"
        checked={answer?.answer === true}
        onClick={onClick}
        value={false}
      />
      <Typography variant="h5">{props.answer.number}.</Typography>
      &nbsp;
      <Typography variant="h5">{props.answer.body}</Typography>
    </Box>
  )
}
