import { Box, Button, makeStyles } from '@material-ui/core'
import React, { FormEvent, FormEventHandler, MouseEventHandler } from 'react'
import { useActions } from '../hooks/useActions'
import { IInput } from '../types/IInput'
import { DynamicFormationInputService } from '../service/DynamicFormationInputService'
import { FormationAnswer } from './FormationAnswer'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Typography } from '@mui/material'
import { useWindowSize } from '../hooks/useWindowSize'
import { QuizInput } from './QuizInput'

interface p{
  question: {
    number: number
    question: IInput
    answers: {
      number: number
      answer: IInput
    }[]
  }
}

const useStyles = makeStyles(theme => ({
  cancelBtn: {
    "&:hover": {
      background: 'white'
    }
  },
  cancelIcon: {
    "&:hover": {
      color: theme.palette.secondary.dark
    }
  },
  input: {
      borderRadius: "25px"
  },
  newAnswer: {
    width: "30%",
    height: "50px"
  }
}))

export const FormationQuestion : React.FC<p> = (props) => {
  const question = props.question
  const {dynamicFormationInput} = useTypedSelector(store => store)
  const size = useWindowSize()
  const { setQuestionValue, setQuestionError, createAnswer, removeQuestion } = useActions()
  const classes = useStyles()

  const answers = question.answers.map((answer, index) => {
    return <FormationAnswer questionNumber={question.number} key={index} answer={answer} />
  })

  const onInput : FormEventHandler = (e : FormEvent & {target: {value: string}}) => {
    setQuestionValue({
      questionNumber: question.number,
      value: e.target.value
    })
    if(e.target.value === ''){
      setQuestionError({
        questionNumber: question.number,
        value: 'Question should have text'
      })
    }
    DynamicFormationInputService.saveFormation(dynamicFormationInput)
  }

  const onNewAnswer : MouseEventHandler = () => {
    createAnswer({
      questionNumber: question.number,
      answerNumber: question.answers.length + 1
    })
    DynamicFormationInputService.saveFormation(dynamicFormationInput)
  }

  const onCancel : MouseEventHandler = () => {
    removeQuestion({
      questionNumber: question.number
    })
    DynamicFormationInputService.saveFormation(dynamicFormationInput)
  }

  return (
    <Box
      marginTop="100px"
    >
      <Box 
        display="flex" 
        marginBottom="30px"
        alignItems="center"
      >
        <Typography variant="h5">{question.number}.</Typography>
        <QuizInput
          onCancel={onCancel}
          error={question.question.error}
          value={(question.question.value as string)}
          onInput={onInput} 
        />

      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        flexDirection={(size.width as number) < 500 ? "column" : undefined}
      >
        {answers}
        <Box 
          width={(size.width as number) < 500 ? "100%" : "50%"}
          height="80px"
          display="flex"
          
          justifyContent="center"
          alignItems="center"
        >
          <Button
            onClick={onNewAnswer}
            variant="outlined"
            color="primary"
            className={classes.newAnswer}
          >
            New Answer</Button>
        </Box>
      </Box>
    </Box>
  )
}
