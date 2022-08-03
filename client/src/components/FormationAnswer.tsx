import { Box } from '@material-ui/core'
import React, { FormEvent, FormEventHandler, MouseEventHandler } from 'react'
import { DynamicFormationInputService } from '../service/DynamicFormationInputService'
import { useActions } from '../hooks/useActions'
import { IInput } from '../types/IInput'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { QuizInput } from './QuizInput'
import { Typography } from '@mui/material'
import { useWindowSize } from '../hooks/useWindowSize'

interface p {
  answer: {
    number: number
    answer: IInput
  }
  questionNumber: number
}

export const FormationAnswer : React.FC<p> = (props) => {
  const {removeAnswer, setAnswerValue, setAnswerError} = useActions()
  const {dynamicFormationInput} = useTypedSelector(store => store)
  const answer = props.answer
  const size = useWindowSize()

  const onInput : FormEventHandler = (e : FormEvent & {target: {value: string}}) => {
    setAnswerValue({
      questionNumber: props.questionNumber,
      answerNumber: answer.number,
      value: e.target.value
    })

    if(e.target.value === ''){
      setAnswerError({
        questionNumber: props.questionNumber,
        answerNumber: answer.number,
        value: 'Answer variant should contain text'
      })
    }

    DynamicFormationInputService.saveFormation(dynamicFormationInput)
  }

  const onCancel : MouseEventHandler = () => {
    removeAnswer({
      questionNumber: props.questionNumber,
      answerNumber: answer.number
    })
    DynamicFormationInputService.saveFormation(dynamicFormationInput)
  }  

  return (
    <Box
     display="flex"
     alignItems="center"
     width={(size.width as number) < 500 ? "100%" : "45%"}
     marginTop="20px"
     paddingLeft="2.5%"
    >
      <Typography fontWeight="400" variant="h6">{answer.number}.</Typography>
      <QuizInput
        value={(answer.answer.value as string)}
        error={answer.answer.error}
        onCancel={onCancel}
        onInput={onInput}
      />
    </Box>
  )
}