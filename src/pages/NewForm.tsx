import { Container, Box, Button, makeStyles } from '@material-ui/core'
import { FormEvent, FormEventHandler, MouseEvent, MouseEventHandler, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BackBtn } from '../components/BackBtn'
import { FormationQuestion } from '../components/FormationQuestion'
import { QuizInput } from '../components/QuizInput'
import { QuizSubmitBtn } from '../components/QuizSubmitBtn'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { DynamicFormationInputService } from '../service/DynamicFormationInputService'
import { LC } from '../service/LC'
import { LCNames } from '../types/LCTypes'

const useStyles = makeStyles({
  newQuestionBtn: {
    marginBottom: "200px",
    marginTop: "40px",
    height: "60px"
  },
  formation: {
    paddingTop: "100px"
  }
})

export const NewForm = () => {
  const params = useParams()
  const classes = useStyles()
  const navigate = useNavigate()
  const { dynamicFormationInput, user, form } = useTypedSelector(store => store)
  const {
    setTitleValue,
    setTitleError,
    createQuestion,
    setFormation,
    createForm,
    openClose,
    clearFormation,
    updateForm,
    checkForms,
    getForms
  } = useActions()
  const formToUpdate = form.forms.find(form => form.id === params.id)

  useEffect(() => {
    checkForms()
    if(!form.forms.length){
      getForms(user.user?.id as string)
    }
    if(params.id && formToUpdate){
      setFormation(DynamicFormationInputService.convertFormToFormation(formToUpdate))
      DynamicFormationInputService.saveFormation(dynamicFormationInput)
    }
    else if(LC.get(LCNames.formation)){
      setFormation(LC.get(LCNames.formation))
      DynamicFormationInputService.saveFormation(dynamicFormationInput)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const questions = dynamicFormationInput.questions.map((question, index) => {
    return <FormationQuestion key={index} question={question} />
  })

  const onTitleInput : FormEventHandler = (e : FormEvent & {target: {value: string}}) => {
    setTitleValue(e.target.value)
    if(e.target.value === ''){
      setTitleError('Quiz should have title')
    }
    DynamicFormationInputService.saveFormation(dynamicFormationInput)
  }

  const onSubmit : MouseEventHandler = () => {
    if(!DynamicFormationInputService.validateFormation(dynamicFormationInput)){
      if(formToUpdate && params.id){
        updateForm(
          params.id,
          DynamicFormationInputService.convertFormationToForm(dynamicFormationInput,
          (user.user?.id as string)
        ))
        openClose("Quiz Updated Successfully", "success")
        clearFormation()
        navigate("/my-forms")
      }
      else {
        createForm(
          DynamicFormationInputService.convertFormationToForm(dynamicFormationInput,
          (user.user?.id as string)
        ))
        openClose("Quiz Created Successfully", "success")
        clearFormation()
      }

    } else {
      openClose("Your Quiz has Fields with Error", "error")
    }
  }

  const onAddNewQuestion : MouseEventHandler = (e : MouseEvent) => {
    createQuestion({
      questionNumber: dynamicFormationInput.questions.length + 1
    })
    DynamicFormationInputService.saveFormation(dynamicFormationInput)
  }

  return (
    <>
      <BackBtn />
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          className={classes.formation}
        >
          <QuizInput
            value={dynamicFormationInput.title.value as string}
            error={dynamicFormationInput.title.error}
            onInput={onTitleInput}
            height="70px"
            font="25px"
          />
          {questions}
          <Button
            className={classes.newQuestionBtn} 
            variant="outlined"
            onClick={onAddNewQuestion}
            color="secondary"
          >
            New Question
          </Button>

        </Box>
      </Container>
    <QuizSubmitBtn onSubmit={onSubmit} />
    </>
  )
}
