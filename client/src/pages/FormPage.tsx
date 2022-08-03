import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import { Key, MouseEventHandler, useEffect } from 'react'
import { useParams } from 'react-router'
import { BackBtn } from '../components/BackBtn'
import { Loader } from '../components/Loader'
import { QuizQuestion } from '../components/QuizQuestion'
import { QuizSubmitBtn } from '../components/QuizSubmitBtn'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { DynamicFillInputService } from '../service/DynamicFillInputService'
import { IForm } from '../types/IForm'

const useStyles = makeStyles({
  title: {
    marginTop: "60px"
  },
  container: {
    display: "flex"
  }
})

export const FormPage = () => {
  const params = useParams()
  const {form, user, dynamicFillInput} = useTypedSelector(store => store)
  const {initFill, createNote, getForm, openClose} = useActions()
  const classes = useStyles()

  useEffect(() => {
    getForm(params.id as string)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(form.form){
      initFill(DynamicFillInputService.convertFormToFill((form.form as IForm)))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.form])

  const onSubmit : MouseEventHandler = () => {
    initFill(DynamicFillInputService.validateAnswers(dynamicFillInput))
    let error = false
    dynamicFillInput.questions.forEach(question => {
      if(question.error.length){
        error = true
      }
    })
    if(!error){
      createNote(DynamicFillInputService.convertAnswersToNote(dynamicFillInput, user.user?.id as string))
      openClose("Data Added", "success")
    }
  }

  const questions = form.form?.questions.map((question: any, index: Key | null | undefined) => (
    <QuizQuestion quiz={form.form as IForm} key={index} questionNumber={question.number} />
  ))

  const submitBtn = (user.user?.id !== form.form?.user) ?
  <QuizSubmitBtn onSubmit={onSubmit} /> 
  :
  null

  const test = form.form ?
  (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Typography align="center" variant="h2" className={classes.title}>{form.form?.title}</Typography>
      {questions}
    </Box>
  )
  :
  (
    <Box
      display="flex" 
      justifyContent="center"
      marginTop="40px"
    >
      <Loader />
    </Box>
  )

//http://localhost:3000/form/62bd8d996b4d02352ef42256
  return (
    <Box className={classes.container}>
    <BackBtn />
    <Container>
      {test}
    </Container>
    {submitBtn}
    </Box>
  )
}
