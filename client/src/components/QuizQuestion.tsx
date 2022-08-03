import { Box, Typography } from '@material-ui/core'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IForm } from '../types/IForm'
import { QuizAnswer } from './QuizAnswer'

interface p {
  quiz: IForm
  questionNumber: number
}

export const QuizQuestion = (props : p) => {
  const question = props.quiz.questions.find(question => question.number === props.questionNumber)
  const {dynamicFillInput} = useTypedSelector(store => store)
  const dQuestion = dynamicFillInput.questions.find(question => question.number === props.questionNumber)

  const answers = question?.answers.map((answer, index) => (
    <QuizAnswer key={index} answer={answer} questionNumber={question.number} />
  ))

  return (
    <Box 
      display="flex"
      flexDirection="column"
      marginTop="40px"
      width="100%"
    >
      <Box
        display="flex"
      >
        <Typography variant="h3">{question?.number}.</Typography>
        &nbsp;
        <Typography variant="h3">
          <Box fontWeight="300">
            {question?.body}
          </Box>
        </Typography>
      </Box>
      <Box color="red">{dQuestion?.error}</Box>
      <Box
        display="flex"
        flexWrap="wrap"
      >
        {answers}
      </Box>
    </Box>
  )
}
