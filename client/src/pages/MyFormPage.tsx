import { Box, Container, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { BackBtn } from '../components/BackBtn'
import { Loader } from '../components/Loader'
import { StatisticQuestion } from '../components/StatisticQuestion'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const MyFormPage = () => {
  const { getForm, getNotes } = useActions()
  const { form, note } = useTypedSelector(store => store)
  const params = useParams()

  useEffect(() => {
    getForm(params.id as string)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getNotes(form.form?.id as string)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.form])

  const questions = form.form?.questions.map((question, index) => (
    <StatisticQuestion key={index} question={question} notes={note.notes} />
  ))

  const content = form.form?.title ? (
    <>
      <Typography variant="h2" align="center">{form.form?.title as string}</Typography>
      <Box display="flex" flexDirection="column">
        {questions}
      </Box>
    </>
  )
  :
  <Box display="flex" justifyContent="center" marginTop="60px">
    <Loader />
  </Box>


  return (
    <Box
      display="flex"
    >
      <BackBtn />
      <Container>
        <Box marginTop="60px">
          {content}
        </Box>
      </Container>
    </Box>
  )
}
